const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller');

const router = express.Router()

router.post("/", createAOrder)

// get orders placed by user
router.get("/email/:email", getOrderByEmail)

module.exports = router