var shelterApiService = require('../Services/ShelterApiService');


exports.Index = (req,res) => {
    res.render('../web/views/create');
}

exports.Create = (req, res) => {
    var ListOfPets = shelterApiService.CreateNewPet(req, responseObject => {
        res.redirect('/');
    });    
    
}


    