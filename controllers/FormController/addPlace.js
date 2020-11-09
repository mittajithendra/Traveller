const countryList = require('../../staticData/countries');

const addPlace=(req,res)=>{
    return res.render("addPlace",{"countryList":countryList.country_list});
}

module.exports={
    addPlace:addPlace
};