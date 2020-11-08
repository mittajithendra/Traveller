const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home/home');
const formFileUpload = require('../controllers/FormController/upload');
const StatesData = require('../controllers/StaticApiData/apiStatesController');

let routes = app => {
    router.get("/", homeController.getHome);

    router.post("/formUpload", formFileUpload.uploadFiles);

    router.get("/api/states/:id",StatesData.requireData);

    
  
    return app.use("/", router);

  };
  
  module.exports = routes;