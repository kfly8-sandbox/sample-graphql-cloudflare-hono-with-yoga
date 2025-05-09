import { builder } from '../builder'

builder.queryType({
  fields: (t) => ({
    world: t.string({
      args: {
        name: t.arg.string({
          required: true,
        }),
      },
      resolve: (_, {name}, c) => {
        return `Hello ${name}! from ${c.something}`
      }
    }),
  }),
})
