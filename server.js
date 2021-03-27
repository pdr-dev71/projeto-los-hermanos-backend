const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('TATAKAE FAMILIA')
})

app.listen(PORT, () =>{
  console.log(`Server is running in port ${PORT}`)
})
