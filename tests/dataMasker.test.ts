import { maskData } from '../src/rules/dataMasker';

describe('Data Masker Rule', () => {
  test('should mask an email address correctly', () => {
    const email = 'developer@example.com';
    const masked = maskData(email, 'email');
    expect(masked).toBe('d*********@example.com');
  });

  test('should mask a credit card keeping only the last 4 digits', () => {
    const cc = '1234 5678 9876 5432';
    const masked = maskData(cc, 'creditCard');
    expect(masked).toBe('**** **** **** 5432');
  });

  test('should return original input if email format is invalid', () => {
    const invalidEmail = 'not-an-email';
    expect(maskData(invalidEmail, 'email')).toBe('not-an-email');
  });
});