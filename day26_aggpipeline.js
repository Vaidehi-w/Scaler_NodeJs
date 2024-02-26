const Product = require('./models/Product'); // Import your Mongoose Product model

/**
 * Executes an aggregation pipeline to calculate product statistics
 * @returns {Object} - Aggregated product statistics
 */
async function getProductStatistics() {
  try {
    const statistics = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          averagePrice: { $avg: '$price' },
          highestQuantity: { $max: '$quantity' }
        }
      }
    ]);

    if (statistics.length > 0) {
      return statistics[0]; // Return the aggregated statistics
    } else {
      throw new Error('No products found.'); // Throw an error if no products are found
    }
  } catch (error) {
    console.error('Error calculating product statistics:', error);
    return null; // Return null in case of an error
  }
}

// Call the function and log the result
getProductStatistics()
  .then(statistics => console.log('Product statistics:', statistics))
  .catch(error => console.error('Error:', error));
