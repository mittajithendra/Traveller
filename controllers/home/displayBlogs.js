const {MongoClient} = require('mongodb');
var ObjectId = require('mongodb').ObjectId; 

const home=(req,res)=>{
    const uri = "mongodb://localhost:27017";
        const client = new MongoClient(uri,{ useUnifiedTopology: true });
        async function run(){
            try{
                await client.connect();

                const database = client.db('traveller');
                const collection = database.collection('blogs');
                //var o_id = new ObjectId(parameter);
                var result = await collection.find({}).toArray();
                console.log(result);
                return res.render("blogsDisplay",{"result":JSON.stringify(result)});
            }
            finally {
                await client.close();
              }
        }
        run().catch(console.dir);


}

module.exports={
    getHome:home
};