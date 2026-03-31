/**
 * Types of sensitive data patterns supported
 */
export type MaskType = 'email' | 'creditCard' | 'phone';

/**
 * Masks sensitive information to protect user privacy
 * @param input - The sensitive string to mask
 * @param type - The category of data (email, creditCard, phone)
 * @returns string - The masked version of the input
 */
export const maskData = (input: string, type: MaskType): string => {
  if (!input) return input;

  switch (type) {
    case 'email':
      // Masks email: u***r@example.com
      const [user, domain] = input.split('@');
      if (!domain) return input;
      return `${user[0]}${'*'.repeat(Math.max(user.length - 1, 3))}@${domain}`;

    case 'creditCard':
      // Masks CC: **** **** **** 1234
      const cleanCC = input.replace(/\s+/g, '');
      return `**** **** **** ${cleanCC.slice(-4)}`;

    case 'phone':
      // Masks phone: +39 *******89
      return input.replace(/.(?=.{2})/g, '*');

    default:
      return input;
  }
};