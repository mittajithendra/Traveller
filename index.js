const express = require('express');
const routes= require('./routes/web');
const bodyParser = require('body-parser');
const app = express();


app.set('views', './views');
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
routes(app);

let port = 3000;
app.listen(port,()=>{
    console.log(`Running at local host : ${port}`);
});
