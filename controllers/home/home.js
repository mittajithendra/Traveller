const countryList = require('../../staticData/countries');

const home=(req,res)=>{
    return res.render("home",{"countryList":countryList.country_list});
}

module.exports={
    getHome:home
};