const upload = require("../../middleware/upload");
const {MongoClient} = require('mongodb');


const uploadFiles = async (req, res) => {
  try {
    
    const fileName = await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }
    else{
        const uri = "mongodb://localhost:27017";
        const client = new MongoClient(uri,{ useUnifiedTopology: true });
        async function run(){
            try{
                await client.connect();

                const database = client.db('traveller');
                const collection = database.collection('places_list');

                const image_names = [];
                for(i=0;i<req.files.length;i++){
                    image_names.push(req.files[i]['filename']);
                } 

                const data = {
                    country : req.body.country,
                    state : req.body.state,
                    district : req.body.district,
                    place_name : req.body.place_name,
                    description : req.body.description,
                    image_paths : image_names
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
    }

    return res.send(`Files have been uploaded.`);

    // console.log(req.file);

    // if (req.file == undefined) {
    //   return res.send(`You must select a file.`);
    // }

    // return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);

    // return res.send(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFiles: uploadFiles
};