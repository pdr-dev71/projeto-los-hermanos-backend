const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config();

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('TATAKAE FAMILIA')
})

app.use(require('./routes'))


module.exports = app;