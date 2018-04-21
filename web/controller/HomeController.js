var shelterApiService = require('../Services/ShelterApiService');

exports.Index = (req, res) => {
    var ListOfPets = shelterApiService.GetListOfPets((responseObject) =>{
        res.render('../web/views/index', {data: JSON.parse(responseObject)});
    });    
}


    