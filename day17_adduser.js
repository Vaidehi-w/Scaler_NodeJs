const mongoose = require('mongoose');

// Define the Mongoose schema for User
const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

// Create a Mongoose model for User based on the schema
const User = mongoose.model('User', userSchema);

// Connect Mongoose to your MongoDB database
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

// Implement the addUserToDatabase function
async function addUserToDatabase(user) {
  try {
    // Create a new User object using the provided user data
    const newUser = new User(user);

    // Save the user to the database
    await newUser.save();

    console.log('User added successfully:', newUser);
  } catch (error) {
    console.error('Error adding user:', error);
  }
}

// Test the function
addUserToDatabase({ username: 'john_doe', email: 'john@example.com' });
