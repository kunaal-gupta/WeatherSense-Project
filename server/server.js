const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World! \n We are starting as a new project </h1>')
})

app.listen(port, () => {
})