import { Router } from 'express';
import * as productsController from './products.controller';

const router = Router();

router.get('/', productsController.getAllProducts);
// Define other routes here

export default router;
