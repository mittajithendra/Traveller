const countryList = require('../../staticData/countries');

const addSubPlace=(req,res)=>{
    return res.render("addSubPlace",{"countryList":countryList.country_list});
}

module.exports={
    addSubPlace:addSubPlace
};