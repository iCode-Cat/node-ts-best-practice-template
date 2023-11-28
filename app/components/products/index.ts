import express from 'express';
import productRoutes from './products.routes';

const app = express();
app.use('/products', productRoutes);

export default app;
