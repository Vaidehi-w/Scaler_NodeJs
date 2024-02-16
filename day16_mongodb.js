const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI
const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Bind connection to success event
db.once('open', function () {
  console.log('Connected to MongoDB successfully!');
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
