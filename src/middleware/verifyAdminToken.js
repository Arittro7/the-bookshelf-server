const jwt = require('jsonwebtoken');

const JWT_ACCESS_TOKEN = process.env.JWT_SECRET_KEY

const verifyAdminToken = (req, res, next) => {
  const token = req.headers['authorization']?.split('')[1]; 
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. Token interrupted' })
  }
  jwt.verify(token, JWT_ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid Credentials' })
    }
    req, user = user;
    next()
  })
}

module.exports = verifyAdminToken;