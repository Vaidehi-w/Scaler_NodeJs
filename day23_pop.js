const mongoose = require('mongoose');

// Define schema for Category entity
const categorySchema = new mongoose.Schema({
  name: String
});

// Define schema for Product entity with a reference to Category
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

// Create model for Category using the schema
const Category = mongoose.model('Category', categorySchema);

// Create model for Product using the schema
const Product = mongoose.model('Product', productSchema);

// Function to create a new category in MongoDB
async function createCategory(categoryData) {
  try {
    const newCategory = new Category(categoryData);
    await newCategory.save();
    console.log('Category created successfully:', newCategory);
    return newCategory;
  } catch (error) {
    console.error('Error creating category:', error);
    return null;
  }
}

// Function to create a new product in MongoDB
async function createProduct(productData) {
  try {
    const newProduct = new Product(productData);
    await newProduct.save();
    console.log('Product created successfully:', newProduct);
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

// Function to retrieve all products with populated category details from MongoDB
async function getProductsPopulatedWithCategory() {
  try {
    const products = await Product.find().populate('category');
    console.log('Products with populated category details:', products);
    return products;
  } catch (error) {
    console.error('Error retrieving products with populated category details:', error);
    return [];
  }
}

module.exports = {
  createCategory,
  createProduct,
  getProductsPopulatedWithCategory
};
