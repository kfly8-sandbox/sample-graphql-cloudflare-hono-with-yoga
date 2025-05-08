import { Hono } from 'hono'
import { createSchema, createYoga } from 'graphql-yoga'

type Bindings = {
  NODE_ENV: string;
}

const app = new Hono<{Bindings: Bindings}>()

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello world!',
    }
  }
});


app.on(['GET', 'POST'], '/graphql', async (c) => {
  const yoga = createYoga({ schema });
  return await yoga.fetch(c.req.raw, c.env, c.executionCtx);
});

export default app
