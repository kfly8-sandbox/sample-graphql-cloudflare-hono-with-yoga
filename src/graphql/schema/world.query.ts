import { builder } from '../builder'

builder.queryType({
  fields: (t) => ({
    world: t.string({
      resolve: (_, _args, c) => {
        return `Hello ${c.something}`
      }
    }),
  }),
})
