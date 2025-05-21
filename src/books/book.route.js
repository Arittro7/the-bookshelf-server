const express = require('express');
const { postBook, getBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken')

const router = express.Router()

// Post a book    --------------> Admin only
router.post("/create-book", verifyAdminToken ,postBook)

// GET ALL BOOKS
router.get('/', getBooks)

// get single Book
router.get('/:id', getSingleBook)

// updating book  --------------> Admin only
router.put("/update/:id" ,verifyAdminToken , updateBook)

// delete book    --------------> Admin only 
router.delete("/:id", verifyAdminToken, deleteBook)

module.exports = router
