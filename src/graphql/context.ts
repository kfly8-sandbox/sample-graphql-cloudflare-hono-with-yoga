import type { Context } from 'hono';

export interface GQLContext {
  hono: Context;
  //db: ...
  //loader: ...
}
