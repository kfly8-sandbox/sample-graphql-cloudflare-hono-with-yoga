import { builder } from '../builder'

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      description: 'A simple hello world query',
      resolve: () => 'Hello world!',
    }),
  }),
})
