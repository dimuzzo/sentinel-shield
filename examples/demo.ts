import { Sentinel, type Schema } from '../src/index';

const guard = new Sentinel();

console.log('Sentinel-Shield: Live Demo\n');
console.log('==========================================');

// SCENARIO 1: The Hacker Attempt (Over-posting / Mass Assignment)
console.log('SCENARIO 1: Blocking malicious payload structure');

const loginSchema: Schema = { 
  username: 'string', 
  passwordHash: 'string' 
};

// The hacker tries to inject "isAdmin: true" into the request
const hackerPayload = { 
  username: 'evil_hacker', 
  passwordHash: '123456', 
  isAdmin: true 
};

try {
  console.log('Incoming Data:', hackerPayload);
  guard.shieldObject(loginSchema, hackerPayload);
} catch (error: any) {
  console.log(`Sentinel Action: Blocked! Reason: ${error.message}\n`);
}

console.log('==========================================');

// SCENARIO 2: The Dirty Payload (XSS & Sensitive Data)
console.log('SCENARIO 2: Cleaning XSS and Masking Privacy Data');

const checkoutSchema: Schema = {
  fullName: 'string',
  deliveryNotes: 'string',
  creditCard: 'string',
  email: 'string'
};

// The user sends dangerous HTML in the notes and sensitive data
const dirtyRequest = {
  fullName: 'John Doe',
  deliveryNotes: 'Leave at the door! <script>stealCookies()</script>',
  creditCard: '4532 1234 5678 9010',
  email: 'john.doe@personal-email.com'
};

console.log('Raw Input:', dirtyRequest);

// 1. Validate structure and automatically sanitize strings (XSS)
const safeData = guard.shieldObject(checkoutSchema, dirtyRequest);

// 2. Mask sensitive fields for secure logging
safeData.creditCard = guard.mask(safeData.creditCard, 'creditCard');
safeData.email = guard.mask(safeData.email, 'email');

console.log('\nSafe & Masked Output (Ready for DB/Logs):');
console.log(safeData);
console.log('==========================================\n');