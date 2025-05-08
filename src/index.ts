import { Hono } from 'hono'
import { createYoga } from 'graphql-yoga'
import SchemaBuilder from '@pothos/core';

type Bindings = {
  NODE_ENV: string;
}

const app = new Hono<{Bindings: Bindings}>()

const builder = new SchemaBuilder({});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => 'Hello, World',
    }),
  }),
});

const schema = builder.toSchema();

app.on(['GET', 'POST'], '/graphql', async (c) => {
  const yoga = createYoga({ schema });
  return await yoga.fetch(c.req.raw, c.env, c.executionCtx);
});

export default app
