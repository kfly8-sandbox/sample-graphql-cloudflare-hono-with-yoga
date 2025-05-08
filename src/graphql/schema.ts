import './schema/hello.query'
import './schema/world.query'

import { builder } from './builder'
export const schema = builder.toSchema()
