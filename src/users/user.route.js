const express = require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

const JWT_ACCESS_TOKEN = process.env.JWT_SECRET_KEY

router.post("/admin", async (req, res) => {
  const { username, password} = req.body;
  try {
    const admin = await User.findOne({ username })
    if (!admin) {
      res.status(404).json({ message: "Admin not found" });
    }
    if (admin.password !== password) {
      res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ id: admin._id, username: admin.username, role: admin.role },
      JWT_ACCESS_TOKEN,
      {expiresIn: "1h"}
    )

    return res.status(200).json({
      message: "Authentication Successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role
      }
    })

  } catch (error) {
    console.error("Failed to login as ADMIN", error);
    res.status(401).send({ message: "Failed to login" })
  }
})

module.exports = router;