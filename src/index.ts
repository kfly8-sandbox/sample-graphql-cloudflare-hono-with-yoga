import { Hono } from 'hono'
import type { Context } from 'hono'
import { createYoga } from 'graphql-yoga'
import { schema } from './graphql/schema'
import { GQLContext } from './graphql/context'

type Bindings = {
  NODE_ENV: string;
}

const app = new Hono<{Bindings: Bindings}>()

app.on(['GET', 'POST'], '/graphql', async (c: Context) => {
  const yoga = createYoga({
    context(): GQLContext {
      return {
        hono: c
      }
    },
    schema
  });

  // NOTE: executionCtx is not used in this example,
  // If you want to use it, you can pass it : `yoga.fetch(c.req.raw, c.env, c.executionCtx)`
  return await yoga.fetch(c.req.raw, c.env)
});

// To easily test the GraphQL API, redirect the root path to /graphql
app.get('/', (c) => c.redirect('/graphql'))

export default app
