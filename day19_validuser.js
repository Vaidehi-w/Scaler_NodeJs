const mongoose = require('mongoose');

// Define user schema with validation for email
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email address'
    }
  }
});

// Create User model
const User = mongoose.model('User', userSchema);

// Function to add a new user with validation
async function addUserWithValidation(user) {
  try {
    // Create a new user instance
    const newUser = new User(user);
    // Save the user to the database
    await newUser.save();
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error.message);
  }
}

// Example usage
mongoose.connect('mongodb://localhost:27017/testDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  // Test cases
  await addUserWithValidation({ username: 'john_doe', email: 'invalid-email' });
  await addUserWithValidation({ username: 'jane_doe', email: 'jane@example.com' });
  // Close the connection
  mongoose.connection.close();
}).catch(error => console.error('Connection error:', error));
