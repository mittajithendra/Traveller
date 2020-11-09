const requireData = (req,res) => {
    districts={
        "Andhra_Pradesh" : [ "Anantapur" , "Chitoor" , "East Godavari" , "Guntur" , "Kadapa" ,"Krishna" , "Kurnool" , "Nellore" ,"Prakasam" ,"Srikakulam" ,"Visakhapatnam","Vizianagaram","West Godavari"],
        "Arunachal_Pradesh" : ["Tawang" , "West Kameng" , "East Kameng" , "Pakke-Kessang" , "Papum Pare" , "Kurung Kumey" , "Kra Daadi" ,"Lower Subansiri", "West Siang" , "Shi-Yomi" , "East Siang" , "Siang" , "Upper Siang" , "Lower Siang" , "Lepa-Rada" ,"Lower Dibang Valley","Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding","Kamle"]
    }

    if(districts[req.params.id]!=undefined){
        res.send(districts[req.params.id]);
    }
    else{
        res.send(["Still Working On this"]);
    }
}

module.exports = {
    requireData
};