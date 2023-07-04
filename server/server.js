const express = require('express')
const app = express()
const port = 5000


app.get('/:id([0-9]{5})', (req, res) => {
  res.json("You've got a new request on localhost:3000/" + req.params.id);
})

app.get('/testing', (req, res) => {
  res.json({'id': "Testingggggggggggggg trrrrrrrrrrhe World!"});
})

app.get('*', (req, res) =>{
  res.send('Invalid Url')
}
)


app.listen(port, () => {
  console.log("Server started on port" + {port})
})
