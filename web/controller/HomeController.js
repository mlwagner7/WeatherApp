var shelterApiService = require('../Services/ShelterApiService');

exports.Index = (req, res) => {
    var ListOfPets = shelterApiService.GetListOfPets((responseObject) =>{
        res.render('../web/views/index', {data: JSON.parse(responseObject)});
    });    
}

exports.petUmbrella = (req, res) => {
    var ListOfPets = shelterApiService.GetPet(req.params.petId, (responseObject) => {
        shelterApiService.getWeather(JSON.parse(responseObject), (responseObject) => {
            res.render('../web/views/pet', {data: responseObject});
        })        
    });  
    
}    



    