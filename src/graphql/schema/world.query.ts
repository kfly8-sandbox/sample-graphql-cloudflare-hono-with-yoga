import { builder } from '../builder'

builder.queryType({
  fields: (t) => ({
    world: t.string({
      resolve: () => 'yeah!!!!',
    }),
  }),
})
