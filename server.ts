import express from 'express';
import productApp from './app/components/products';
import userApp from './app/components/users';
import errorHandler from './app/middleware/errorHandler';
import session from 'express-session';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './config/logger';
import { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { connectDB } from './config';

dotenv.config();
connectDB();
// Log a message

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

export const app = express();

app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: 'auto', // recommended for production to auto detect HTTP/HTTPS
      httpOnly: true, // recommended to prevent client-side scripts from accessing the cookie
      maxAge: 1000 * 60 * 60 * 24, // Set the expiration of the cookie (e.g., 1 day)
    },
  }),
);

app.use(cors());
app.use(limiter);
app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());
app.use(errorHandler);
app.use(cookieParser());

// apps
app.use('/', productApp);
app.use('/', userApp);

// You can also log requests by creating a middleware
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// And log errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error: ${err.message}`);
  next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
