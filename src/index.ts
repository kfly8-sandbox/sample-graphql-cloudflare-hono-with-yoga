import { Hono } from 'hono'
import { createYoga } from 'graphql-yoga'
import { schema } from './graphql/schema'
import { GQLContext } from './graphql/context'

type Bindings = {
  NODE_ENV: string;
}

const app = new Hono<{Bindings: Bindings}>()

app.on(['GET', 'POST'], '/graphql', async (c) => {
  const yoga = createYoga({
    context(): GQLContext {
      return { something: c.req.header('User-Agent') || 'unknown' }
    },
    schema
  });
  return await yoga.fetch(c.req.raw, c.env, c.executionCtx);
});

export default app
