import mongoose from 'mongoose';

// Define the schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  // Add other fields as necessary
});

// Create the model
const Product = mongoose.model('Product', productSchema);

export default Product;
