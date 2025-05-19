const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require("cors")

// middleware
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

// routes
const bookRoutes = require('./src/books/book.route')
app.use("/api/books", bookRoutes)


// mongoose -------------> 
async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get('/', (req, res) => {
    res.send('The Book Shelf')
  })
}
main().then(() => console.log('Mongodb connect successfully')).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`the book shelf listening on port ${port}`)
})
