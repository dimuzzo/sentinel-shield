import { sanitizeXSS } from '../src/rules/xssProtector';

test('should convert script tags to safe HTML entities', () => {
  const dirty = "<script>alert('XSS')</script>";
  const clean = "&lt;script&gt;alert(&#x27;XSS&#x27;)&lt;&#x2F;script&gt;";
  expect(sanitizeXSS(dirty)).toBe(clean);
});

test('should leave safe strings unchanged', () => {
  const safe = "Hello, how are you?";
  expect(sanitizeXSS(safe)).toBe(safe);
});