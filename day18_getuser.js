const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import your User model

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Start the Express server after successful MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Express route to get all users from MongoDB
app.get('/users', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();
    // Send JSON response with the array of user objects
    res.json(users);
  } catch (err) {
    // If there's an error, send an error response
    res.status(500).json({ message: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
