const { MongoClient } = require("mongodb");

const url = "Enter your MongoDB url";
const client = new MongoClient(url);

async function ActiveUserDetails() {
  let client;
  try {
    client = new MongoClient(url);
    await client.connect();

    const db = client.db('WeatherSenseDB');
    const col = db.collection('ActiveUsers');

    // const options = {
    //   sort: { timestamp: -1 } // Sort documents in descending order based on the "timestamp" field
    // };

    const result = await col.find({}).toArray();
    delete result._id;

    if (result) {
      return result[result.length - 1];
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
