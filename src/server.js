const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

require('./database')

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('TATAKAE FAMILIA')
})

app.use(express.json())


app.use(require('./routes'))


app.listen(PORT, () =>{
  console.log(`Server is running in port ${PORT}`)
})
