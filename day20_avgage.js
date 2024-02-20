const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming you have a User model defined

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Express route to calculate the average age of all users in MongoDB
app.get('/average-age', async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" } // Assuming age field in your User model
        }
      }
    ]);

    if (result.length > 0) {
      res.json({ averageAge: result[0].averageAge });
    } else {
      res.status(404).json({ error: 'No users found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
