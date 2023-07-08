const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { LoginCred } = require('./login');
const { RegisterCred } = require('./register');

app.use(cors());
app.use(express.json());

app.post('/loginCredentials', async (req, res) => {
  const { Username, Password } = req.body;
  const result = await LoginCred(Username, Password);
  console.log(result);

  if (result === 1) {
    res.send('successful')
  } else {
    res.send('unsuccessful')
  }

});

app.post('/registerCredentials', async (req, res) => {
  const { Username, Password, Name, City } = req.body;
  const result = await RegisterCred(Username, Password, Name, City);
  console.log(result);

  if (result === 1) {
    res.send('exists')
  } else if(result === 2) {
    res.send('created')

  }
  else if (result === 0) {
    res.send('unsuccessful')
  }

});

app.get('/', (req, res) => {
  res.send('Server is running on port ' + port)
})


app.listen(port, () => {
  console.log('Server is running on port ${port}');
});

