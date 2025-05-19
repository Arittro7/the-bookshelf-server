const express = require('express');
const { postBook, getBooks, getSingleBook, updateBook } = require('./book.controller');
const router = express.Router()

// Post a book
router.post("/create-book", postBook)

// GET ALL BOOKS
router.get('/', getBooks)

// get single Book
router.get('/:id', getSingleBook)

// updating book
router.put("/update/:id" , updateBook)

module.exports = router
