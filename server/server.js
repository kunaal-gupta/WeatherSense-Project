const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { LoginCred } = require('./LoginVerify');


app.use(cors());
app.use(express.json());

app.post('/loginCredentials', async (req, res) => {
  // Handle the POST request logic here
  const { Username, Password } = req.body;
  const result = await LoginCred(Username, Password);
  console.log(result);

  if (result === 1) {
    res.send('successful')
  } else {
    res.send('unsuccessful')
  }

});

app.get('/', (req, res) => {
  res.send('Server is running on port ' + port)
})

// app.get('/server01', (req, res) => {
//   res.send('Server is running on port ' + port + ' Server01')
// })

// app.get('/server02', (req, res) => {
//   res.send('Server is running on port ' + port + ' Server02')
// })


app.listen(port, () => {
  console.log('Server is running on port ${port}');
});

