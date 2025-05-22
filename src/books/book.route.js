const express = require('express');
const {  getBooks, getSingleBook, updateBook, deleteBook, postBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken')
const Book = require ('./book.model.js')

const router = express.Router()

// Post a book    --------------> Admin only
router.post("/create-book", verifyAdminToken ,postBook)

// GET ALL BOOKS
router.get('/', getBooks)

// get single Book
router.get('/:id', getSingleBook)

// updating book  --------------> Admin only
router.put("/edit/:id" ,verifyAdminToken , updateBook)

// delete book    --------------> Admin only 
router.delete("/:id", verifyAdminToken, deleteBook)

module.exports = router
