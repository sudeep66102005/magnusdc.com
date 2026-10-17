// Read a password from stdin (never a command-line argument); prints only a salted hash.
const { randomBytes, scryptSync } = require('node:crypto');
let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { input += chunk; if (input.length > 130) process.exit(1); });
process.stdin.on('end', () => {
  const password = input.replace(/\r?\n$/, '');
  if (password.length < 12 || password.length > 128) throw new Error('Password must be 12–128 characters');
  const salt = randomBytes(16).toString('hex');
  console.log(`scrypt$${salt}$${scryptSync(password, salt, 64).toString('hex')}`);
});
