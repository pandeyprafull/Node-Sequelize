const usernameStr = Math.random().toString(36).substring(2,5) + Math.random().toString(36).substring(2,8);

console.log(usernameStr);

const passwordStr = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

console.log(passwordStr);

module.exports = { usernameStr, passwordStr };