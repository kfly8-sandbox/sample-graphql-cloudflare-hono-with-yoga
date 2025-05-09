import { DocumentNode } from 'graphql';
import { Hono } from 'hono'
import { BlankSchema } from 'hono/types';

export { gql } from 'graphql-tag';

export const executeQuery = async (
  app: Hono<{ Bindings: { NODE_ENV: string; }; }, BlankSchema, "/">,
  query: DocumentNode,
  variables?: Record<string, any>,
  headers?: Record<string, string>
) => {

  return app.request('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({
      query: query.loc?.source.body,
      variables
    })
  });
}
