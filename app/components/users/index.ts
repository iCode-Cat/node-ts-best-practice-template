import express from 'express';
import userRoutes from './users.routes';

const app = express();
app.use('/user', userRoutes);

export default app;
