const { MongoClient } = require("mongodb");

const url = "mongodb+srv://kunaalgupta:kDGpvJLZDibg7PbR@clusterinit.ss7ajbc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function ActiveUserDetails() {
  let client;
  try {
    client = new MongoClient(url);
    await client.connect();

    const db = client.db('WeatherSenseDB');
    const col = db.collection('ActiveUsers');

    const result = await col.findOne({});
    delete result._id;

    if (result) {
      return result;
    } else {
      return 0;
    }
  } catch (error) {
    console.error('Error retrieving active user details:', error);
    throw error; // Rethrow the error to be handled by the caller
  } finally {
    if (client) {
      await client.close();
    }
  }
}

module.exports = { ActiveUserDetails };

// (async () => {
//   const a = await ActiveUserDetails();
//   console.log(a);
// })();
