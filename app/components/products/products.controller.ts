import { Request, Response } from 'express';
import * as productsService from './products.service';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  res.json(products);
};
// Define other controllers here
