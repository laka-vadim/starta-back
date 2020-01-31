const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    minlength: 18,
    maxlength: 18,
    match: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('book', bookSchema);