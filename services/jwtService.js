const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'your-secret-key';

exports.generateToken = (userId, profile) => {
  return jwt.sign({ userId, profile }, secretKey, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};
