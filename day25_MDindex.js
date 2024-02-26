const Product = require('./models/Product'); // Import your Mongoose Product model

/**
 * Creates an index on the "name" field of the "Product" collection in MongoDB
 */
async function createProductNameIndex() {
  try {
    await Product.collection.createIndex({ name: 1 });
    console.log('Index created successfully on the "name" field of the "Product" collection.');
  } catch (error) {
    console.error('Error creating index:', error);
  }
}

// Call the function
createProductNameIndex();
