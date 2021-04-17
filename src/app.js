const express = require('express')

const app = express()

require('dotenv').config();

app.get('/', (req, res) => {
  res.status(200).send('TATAKAE FAMILIA')
})

app.use(express.json())


app.use(require('./routes'))


module.exports = app;