import { sanitizeXSS } from './rules/xssProtector';
import { validateSchema, Schema } from './rules/schemaValidator';
import { maskData, MaskType } from './rules/dataMasker';

/**
 * Sentinel Class - The main entry point for data protection.
 * This class provides high-level methods to secure and clean incoming data.
 */
export class Sentinel {
  /**
   * Sanitizes a single string against XSS attacks.
   * @param input - The raw string to be cleaned.
   */
  public shieldString(input: string): string {
    return sanitizeXSS(input);
  }

  /**
   * Validates and cleans an entire object based on a schema.
   * Useful for API request bodies.
   * @param schema - The expected object structure.
   * @param data - The raw data object.
   */
  public shieldObject(schema: Schema, data: any): any {
    if (!validateSchema(schema, data)) {
      throw new Error('Sentinel Alert: Data does not match the required schema.');
    }

    // Apply XSS protection to all string values within the object automatically
    const protectedData = { ...data };
    for (const key in protectedData) {
      if (typeof protectedData[key] === 'string') {
        protectedData[key] = sanitizeXSS(protectedData[key]);
      }
    }
    
    return protectedData;
  }

  /**
   * Protects sensitive data by masking it.
   * @param input - Sensitive string (email, credit card, etc.)
   * @param type - The category of data to mask.
   */
  public mask(input: string, type: MaskType): string {
    return maskData(input, type);
  }
}

// Exporting types for external usage
export { Schema, MaskType };