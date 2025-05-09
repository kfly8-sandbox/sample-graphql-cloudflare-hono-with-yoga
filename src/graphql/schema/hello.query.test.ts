import { describe, it, expect } from 'bun:test';
import { gql, executeQuery } from '../test/utils'

import app from '../../index';

describe('Hello Query', () => {
  it('should return hello world', async () => {
    const query = gql`query { hello }`
    const res = await executeQuery(app, query);

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      data: {
        hello: 'Hello world!',
      },
    });
  });
})
