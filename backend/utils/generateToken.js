import jwt from 'jsonwebtoken';
import { ENV, JWT_EXPIRES, JWT_SECRET } from '../config/secrets.js';

const generateToken = (res, id) => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: ENV !== 'development',
    sameSite: 'strict',
    maxAge: 90 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
