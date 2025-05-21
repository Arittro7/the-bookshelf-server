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
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/Stats/adminStats')

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)


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
