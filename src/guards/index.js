const jwt = require('jsonwebtoken')
module.exports = {
  isLogged = async (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token){
      return res.status(403).send({
        auth: false, message: 'No token provided.'
      })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          auth: false,
          message: `Fail to Authentication. Error -> ${error}`
        })
      }
      next()
    })
  },
  isAdmin = async (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token){
      return res.status(403).send({
        auth: false, message: 'No token provided.'
      })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          auth: false,
          message: `Fail to Authentication. Error -> ${error}`
        })
      }
      if(decoded.type !== 'ADMIN'){
        return res.status(403).send({
          auth: false, message: 'User without permission.'
        })
      }
      next()
    })
  }
}