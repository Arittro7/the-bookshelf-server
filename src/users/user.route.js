const express = require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/admin", async (req, res) =>{
  const {} = req.body;
  try {
    const admin = await User.findOne({username})
    if(!admin){
      res.status(404).json({ message: "Admin not found" });
    }
    if(username.password !== admin.password){
      res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({id: admin._id, username: admin.username,  } )

  } catch (error) {
    console.error("Failed to login as ADMIN", error);
    res.status(401).json({ message: "Failed to login" })
  }
})

module.exports = router;