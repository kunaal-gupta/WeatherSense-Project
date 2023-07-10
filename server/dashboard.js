const { MongoClient } = require("mongodb");

const url = "Enter your MongoDB url";
const client = new MongoClient(url);

async function ActiveUsers(Username, Password) {
    try {
        await client.connect();

        const db = client.db('WeatherSenseDB');
        const col1 = db.collection('LoginAuthentication');
        const col2 = db.collection('ActiveUsers');


        const query = { 'Username': Username, 'Password': Password};
        const result = await col1.findOne(query);
        delete result._id;

        await col2.insertOne(result)

        if (result) {
            return 1;
        } else {
            return 0
        }
    }
    finally {
        await client.close();
    }
    
}


// (async () => {
//     const a = await ActiveUsers();
//     console.log(a);
//   })();

module.exports = { ActiveUsers };
