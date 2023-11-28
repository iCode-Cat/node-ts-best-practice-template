import Product from '../../models/product.model';

// Get all products
export const getAllProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    throw error;
  }
};

// Add other CRUD operations (create, update, delete, etc.) as needed
