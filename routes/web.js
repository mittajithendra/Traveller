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
const BlogUpload = require('../controllers/FormController/blogUpload');
const DisplayBlogs = require('../controllers/home/displayBlogs');
const CreateBlog = require('../controllers/FormController/createBlog');
const DisplayIndividualBlog = require('../controllers/Blogs/displayIndividualBlogs');


let routes = app => {
  
    router.get("/", displayAllPlaces.getHome);

    router.get("/displayPlace", displayIndividualPlace.getHome);

    router.get("/addPlace",placeUpload.addPlace);

    router.get("/addSubPlace",subPlaceUpload.addSubPlace);

    router.post("/formUpload", formFileUpload.uploadFiles);

    router.get("/createBlog",CreateBlog.getHome);

    router.get("/displayBlogs",DisplayBlogs.getHome);

    router.post("/blogUpload",BlogUpload.uploadFiles);

    router.get("/api/states/:id",StatesData.requireData);

    router.get("/api/districts/:id",DistrictsData.requireData);

    router.get('/displayIndividualBlog/:id',DisplayIndividualBlog.getHome);

    

    
  
    return app.use("/", router);

  };
  
  module.exports = routes;