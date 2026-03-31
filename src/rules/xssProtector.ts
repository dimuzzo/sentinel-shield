export const sanitizeXSS = (input: string): string => {
  if (typeof input !== 'string') return input;

  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
  };

  // Substitute the special characters using a global regex
  // Fallback to the original character to satisfy TypeScript strict mode
  return input.replace(/[&<>"'/]/g, (char) => map[char] || char);
};