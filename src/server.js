const express = require('express')
const app = express()

require('./database/models')

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('TATAKAE FAMILIA')
})

app.use(express.json())


app.use(require('./routes'))


module.exports = app;