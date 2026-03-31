import { Sentinel, Schema } from '../src/index';

describe('Sentinel Main Integration', () => {
  const guard = new Sentinel();

  test('should validate and sanitize an entire user object', () => {
    const userSchema: Schema = {
      username: 'string',
      bio: 'string'
    };

    const rawData = {
      username: 'john_doe',
      bio: '<script>bad_code()</script>'
    };

    const secureData = guard.shieldObject(userSchema, rawData);

    expect(secureData.username).toBe('john_doe');
    expect(secureData.bio).toBe('&lt;script&gt;bad_code()&lt;&#x2F;script&gt;');
  });

  test('should throw error for invalid schema', () => {
    const simpleSchema: Schema = { id: 'number' };
    const badData = { id: 'not_a_number' };

    expect(() => guard.shieldObject(simpleSchema, badData)).toThrow();
  });
});