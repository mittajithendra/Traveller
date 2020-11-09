const {MongoClient} = require('mongodb');

const home=(req,res)=>{
    const uri = "mongodb://localhost:27017";
        const client = new MongoClient(uri,{ useUnifiedTopology: true });
        async function run(){
            try{
                await client.connect();

                const database = client.db('traveller');
                const collection = database.collection('places_list');

                const image_names = [];

                const result = await collection.find({country:"India" }).toArray();
                console.log(result);
            }
            finally {
                await client.close();
              }
        }
        run().catch(console.dir);





    return res.render("home");





}

module.exports={
    getHome:home
};