const mongoose = require('mongoose');

const GroupMessageSchema = new mongoose.Schema({
  from_user: {
    type: String,
    required: [true, 'unknown sender'],
    trim: true,
    lowercase: true
  },
  room: {
    type: String,
    required: [true, 'Please enter group name'],
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

const GroupMessage = mongoose.model("group_message", GroupMessageSchema);
module.exports = GroupMessage;