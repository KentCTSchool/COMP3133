const mongoose = require('mongoose');

const PrivateMessageSchema = new mongoose.Schema({
  from_user: {
    type: String,
    required: [true, 'No sender received'],
    trim: true,
    lowercase: true
  },
  to_user: {
    type: String,
    required: [true, 'No receiver received'],
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: [true, 'No messages received'],
    trim: true,
    lowercase: true
  },
  date_sent: {
    type: String,
    trim: true,
    lowercase: true
  },
});

const PrivateMessage = mongoose.model("private_message", PrivateMessageSchema);
module.exports = PrivateMessage;