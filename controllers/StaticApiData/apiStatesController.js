const requireData = (req,res) => {
    states={
        "India" : ["Ap","Kerala"],
        "USA" : ["Albania","California"]
    }

    if(states[req.params.id]!=undefined){
        res.send(states[req.params.id]);
    }
    else{
        res.send({});
    }
}

module.exports = {
    requireData
};