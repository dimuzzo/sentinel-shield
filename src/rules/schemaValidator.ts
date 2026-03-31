/**
 * Interface for the schema definition
 * Specifies the expected type for each key
 */
export interface Schema {
  [key: string]: 'string' | 'number' | 'boolean';
}

/**
 * Validates an object against a predefined schema
 * @param schema - The blueprint for validation
 * @param data - The object to be validated
 * @returns boolean - True if data matches schema perfectly
 */
export const validateSchema = (schema: Schema, data: any): boolean => {
  const schemaKeys = Object.keys(schema);
  const dataKeys = Object.keys(data);

  // Check if the number of properties matches to prevent unexpected data injection
  if (schemaKeys.length !== dataKeys.length) {
    return false;
  }

  // Verify each property type and existence
  return schemaKeys.every((key) => {
    return data.hasOwnProperty(key) && typeof data[key] === schema[key];
  });
};