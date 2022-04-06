const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter username'],
    trim: true,
    lowercase: true
  },
  firstname: {
    type: String,
    required: [true, 'Please enter firstname'],
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: [true, 'Please enter lastname'],
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
    trim: true,
    lowercase: true
  },
  createon: {
    type: String,
    trim: true,
    lowercase: true
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;