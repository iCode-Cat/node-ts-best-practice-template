/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Express {
  export interface Request {
    user?: any; // Define the type of 'user' according to your needs
  }
}
