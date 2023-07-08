const { MongoClient } = require("mongodb");

const url = "mongodb+srv://kunaalgupta:kDGpvJLZDibg7PbR@clusterinit.ss7ajbc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function LoginCred(Username, Password) {
    try {
        await client.connect();

        const db = client.db('WeatherSenseDB');
        const col = db.collection('LoginAuthentication');

        const query = { 'Username': Username, 'Password': Password };
        const result = await col.findOne(query);

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


module.exports = { LoginCred };
