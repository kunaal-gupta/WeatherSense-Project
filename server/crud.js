const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://kunaalgupta:kDGpvJLZDibg7PbR@clusterinit.ss7ajbc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "WeatherSenseDB";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("LoginAuthentication");

         // Construct a document                                                                                                                                                              
        //  let Credentials = [
        //     {'Username': 'Kunaal', 'Password': 'Gupta'},
        //     {'Username': 'Ishaan', 'Password': 'Gupta'},
        //     {'Username': 'Raj', 'Password': 'rr'},
        //     {'Username': 'Sohan', 'Password': 'rr'},

        //  ]

         // Insert a single document, wait for promise so we can read it back
        //  const p = await col.insertMany(Credentials);
        const query = { 'Username': 'Kunaal', 'Password': 'Guhpta' };
        const result = await col.findOne(query);
    
        console.log(result);
         
         // Find one document
        //  const myDoc = await col.findOne();
        //  // Print to the console
        //  console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

// run().catch(console.dir);
run()
