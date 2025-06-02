const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Pre-save hook to hash the password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();  // If the password is not modified, continue
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

// Create and export the User model
const User = mongoose.model('User', UserSchema);
module.exports = User;

