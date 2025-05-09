import { describe, it, expect } from 'bun:test';
import { gql, executeQuery } from '../test/utils';

import app from '../../index';

describe('World Query', () => {
  it('should return greeting with name', async () => {
    const query = gql`
      query MyQuery($name: String!) {
        world(name: $name)
      }
    `
    const variables = { name: "kobaken" };
    const headers = { 'User-Agent': 'test-agent' };
    const res = await executeQuery(app, query, variables, headers);

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      data: {
        world: 'Hello kobaken! from test-agent',
      }
    });
  });
});
