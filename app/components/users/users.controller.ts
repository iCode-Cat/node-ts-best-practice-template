import { Request, Response } from 'express';
import { generateToken } from '../../../utils/jwt.utils';

export const logUser = (req: Request, res: Response) => {
  const user = {
    id: '000',
  };
  const token = generateToken(user.id);

  req.cookies.user = user;

  // Set cookie with the token
  res.cookie('jwt', token, {
    httpOnly: true, // Makes the cookie inaccessible to client-side scripts
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    maxAge: 3600000, // Cookie expiration time in milliseconds (1 hour here)
  });

  const visitCount = req.cookies.visitCount ? parseInt(req.cookies.visitCount) : 0;

  res.cookie('visitCount', visitCount + 1, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 30 * 24 * 60 * 60 * 1000, // Expires in 30 days
  });

  res.status(200).send('Logged User');
};

export const getUser = (req: Request, res: Response) => {
  // Clear the JWT cookie
  //   res.cookie('jwt', '', {
  //     httpOnly: true,
  //     expires: new Date(0), // Set the cookie to expire immediately
  //   });
  res.status(200).send(req.cookies);
};
