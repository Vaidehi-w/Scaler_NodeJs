const mongoose = require('mongoose');

// Define schema for Product entity
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
});

// Create model for Product using the schema
const Product = mongoose.model('Product', productSchema);

// Function to create a new product in MongoDB
async function createProduct(product) {
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    console.log('Product created successfully:', newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
  }
}

// Function to retrieve all products from MongoDB
async function getAllProducts() {
  try {
    const products = await Product.find();
    console.log('All products:', products);
    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
    return [];
  }
}

// Function to update a product in MongoDB
async function updateProduct(productId, updatedProduct) {
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
    console.log('Product updated successfully:', product);
  } catch (error) {
    console.error('Error updating product:', error);
  }
}

// Function to delete a product from MongoDB
async function deleteProduct(productId) {
  try {
    await Product.findByIdAndDelete(productId);
    console.log('Product deleted successfully');
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
