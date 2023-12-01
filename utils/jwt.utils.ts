import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your_secret_key';

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
