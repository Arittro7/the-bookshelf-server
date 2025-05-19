const Book = require("./book.model");

const postBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body })
    await newBook.save()
    res.status(200).send({ message: "Book posted successfully", book: newBook })
  } catch (err) {
    console.error("Failed to add Book", err);
    res.status(500).send({ message: "Failed to Add Book" })

  }
}

// get books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 })
    res.status(200).send(books)
  } catch (error) {
    console.error("Error fetching to books", err);
    res.status(500).send({ message: "Failed to fetch Book" })
  }
}

// get single book 
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not found" })
    }
    res.status(200).send(book)
  } catch (error) {
    console.error("Error fetching to book", error);
    res.status(500).send({ message: "Failed to fetch Book" })
  }
}

// update book
const updateBook = async(req, res) =>{
  try {
    const {id} = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true})
    if(!updatedBook){
      res.status(404).send({ message: "Book is not found" })
    }
    res.status(200).send({
      message: "Book updated successfully",
      book: updateBook
    })
  } catch (error) {
    console.error("Error updating a book", error);
    res.status(500).send({ message: "Failed to update Book" })
  }
}

  module.exports = {
    postBook, getBooks, getSingleBook, updateBook
  }