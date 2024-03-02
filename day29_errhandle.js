const express = require('express');
const errorHandler = require('./errorHandler'); // Assuming errorHandler.js is in the same directory

const app = express();

// Your routes and other middleware go here

// Add the error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
