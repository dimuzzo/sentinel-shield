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
  return input.replace(/[&<>"'/]/g, (char) => map[char]);
};