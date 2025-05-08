import { builder } from '../builder'

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => 'Hello world!',
    }),
  }),
})
