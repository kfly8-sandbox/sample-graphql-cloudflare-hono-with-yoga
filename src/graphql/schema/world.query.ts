import { builder, desc } from '../builder'

builder.queryType({
  fields: (t) => ({
    world: t.string({
      description: desc`
        Hello
        - one
        - two
      `,
      args: {
        name: t.arg.string({
          required: true,
        }),
      },
      resolve: (_, {name}, c) => {
        const ua = c.hono.req.header('user-agent')
        return `Hello ${name}! from ${ua}`
      }
    }),
  }),
})
