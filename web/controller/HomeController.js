var shelterApiService = require('../Services/ShelterApiService');

exports.Index = (req, res) => {
    shelterApiService.GetListOfPets();
    // res.render('');
    res.render('../web/views/index');
}


    