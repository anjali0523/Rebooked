const express = require('express');
const Book = require('../models/Book');
const upload = require('../middleware/upload');
const router = express.Router();

// Add a new book
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, author, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBook = new Book({ title, author, price, description, image });
    await newBook.save();
    res.status(201).json({ message: 'Book uploaded' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload book' });
  }
});

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find().sort({ dateAdded: -1 });
  res.json(books);
});

module.exports = router;
