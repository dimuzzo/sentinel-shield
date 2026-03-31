import { validateSchema, Schema } from '../src/rules/schemaValidator';

describe('Schema Validator Rule', () => {
  const userSchema: Schema = {
    username: 'string',
    age: 'number',
    isAdmin: 'boolean',
  };

  test('should return true for valid data matching the schema', () => {
    const validData = { username: 'dev_user', age: 25, isAdmin: false };
    expect(validateSchema(userSchema, validData)).toBe(true);
  });

  test('should return false if a property type is incorrect', () => {
    const invalidData = { username: 'dev_user', age: '25', isAdmin: false }; // age is string
    expect(validateSchema(userSchema, invalidData)).toBe(false);
  });

  test('should return false if there are extra properties (Over-posting protection)', () => {
    const extraData = { username: 'hacker', age: 30, isAdmin: true, role: 'root' };
    expect(validateSchema(userSchema, extraData)).toBe(false);
  });
});