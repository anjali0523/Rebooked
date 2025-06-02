const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String,
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
