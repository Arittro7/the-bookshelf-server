const express = require('express');
const { postBook, getBooks, getSingleBook } = require('./book.controller');
const router = express.Router()

// Post a book
router.post("/create-book", postBook)

// GET ALL BOOKS
router.get('/', getBooks)

// get single Book
router.get('/:id', getSingleBook)

module.exports = router
