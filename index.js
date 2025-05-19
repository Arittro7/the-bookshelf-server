const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  app.get('/', (req, res) => {
    res.send('The Book Shelf')
  })
}
main().then(()=> console.log('Mongodb connect successfully')).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`the book shelf listening on port ${port}`)
})
