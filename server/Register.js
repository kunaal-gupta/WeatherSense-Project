const { MongoClient } = require("mongodb");

const url = "Enter your MongoDB url";
const client = new MongoClient(url);

async function RegisterCred(Username, Password, Name, City) {
    try {
        await client.connect();

        const db = client.db('WeatherSenseDB');
        const col = db.collection('LoginAuthentication');

        const query = { 'Username': Username, 'Password': Password, 'Name': Name, 'City': City };
        const result = await col.findOne(query);

    
        if (result) {
            return 1;
        } else {
            const result = await col.insertOne(query);
            if (result) {
                return 2;
            } else {
                return 0
            }
        }
    }
    finally {
        await client.close();
    }

}


module.exports = { RegisterCred };


