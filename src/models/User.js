const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  age: Number
});

// Export the model
module.exports = mongoose.model('User', userSchema);
