const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home/home');
const formFileUpload = require('../controllers/FormController/upload');
const placeUpload = require('../controllers/FormController/addPlace');
const subPlaceUpload = require('../controllers/FormController/addSubPlace');
const StatesData = require('../controllers/StaticApiData/apiStatesController');
const DistrictsData = require('../controllers/StaticApiData/apidistrictsController');
const displayAllPlaces = require('../controllers/DisplayPlaces/displayAllPlaces');
const displayIndividualPlace = require('../controllers/DisplayPlaces/displayIndividualPlace');
let routes = app => {
  
    router.get("/", displayAllPlaces.getHome);

    router.get("/displayPlace", displayIndividualPlace.getHome);

    router.get("/addPlace",placeUpload.addPlace);

    router.get("/addSubPlace",subPlaceUpload.addSubPlace);

    router.post("/formUpload", formFileUpload.uploadFiles);


    router.get("/api/states/:id",StatesData.requireData);

    router.get("/api/districts/:id",DistrictsData.requireData);

    

    
  
    return app.use("/", router);

  };
  
  module.exports = routes;