const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');


app.use(cors());
app.use(express.json()); // Add this line to parse request bodies as JSON


app.post('/server01', (req, res) => {
  // Handle the POST request logic here
  console.log(req.BODY);
  
  res.send('POST request to server01 received');

});

app.get('/', (req, res)=> {
  res.send('Server is running on port ' + port )
})

app.get('/server01', (req, res)=> {
  res.send('Server is running on port ' + port + ' Server01')
})

app.get('/server02', (req, res)=> {
  res.send('Server is running on port ' + port + ' Server02')
})


app.listen(port, () => {
  console.log('Server is running on port ${port}');
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://kunaalgupta:kDGpvJLZDibg7PbR@clusterinit.ss7ajbc.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
