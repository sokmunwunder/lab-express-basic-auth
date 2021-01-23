// User model goes here
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    minlength: 1,
    maxlength: 25,
    required: true
  },
  passwordHashAndSalt: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
