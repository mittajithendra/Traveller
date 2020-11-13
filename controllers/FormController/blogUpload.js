const {MongoClient} = require('mongodb');


const uploadFiles = async (req, res) => {
        const uri = "mongodb://localhost:27017";
        const client = new MongoClient(uri,{ useUnifiedTopology: true });
        async function run(){
            try{
                await client.connect();

                const database = client.db('traveller');
                const collection = database.collection('blogs');

                const data = {
                    description : req.body.blog
                }

                const result = await collection.insertOne(data);
                console.log(
                    `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
                  );

            }
            finally {
                await client.close();
              }
        }
        run().catch(console.dir);
        return res.render('successPage');
    }

 


module.exports = {
  uploadFiles: uploadFiles
};