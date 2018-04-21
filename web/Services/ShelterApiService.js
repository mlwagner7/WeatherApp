var request = require('request');

exports.GetListOfPets = (callback) =>
{
    request('https://shelterapi.herokuapp.com/pets', 
        function (error, response, body) {
            console.log(body)
            callback(body);
});
}

exports.GetPet = (id, callback) =>
{
    var uri = 'https://shelterapi.herokuapp.com/pets/'+id;
    console.log(uri)
    request(uri, 
        function (error, response, body) {
            console.log(body)
            callback(body);
});
}

exports.CreateNewPet = (req, callback) => {
    request.post({
        headers: {'content-type' : 'application/json'},
        url:     'https://shelterapi.herokuapp.com/pets',
        body:    JSON.stringify(req.body)
    }, function(error, response, body){
        console.log(JSON.stringify(req.body))
        if(error){
            console.log(error);
        }
        if(body){
            console.log(body);
        }
        if(response){
            callback();
            }
        });
}

exports.getWeather = (pet, callback) => {
    console.log(pet)
    var uri = 'https://api.darksky.net/forecast/7b12bec93497f89cdb10248c839a4890/'+pet[0].latitude+','+pet[0].longitude;
    console.log(uri)
    request(uri, 
        function (error, response, body) {
            if(body){
                if(JSON.parse(body).currently){
                var precip = JSON.parse(body).currently.precipProbability;
                }
            }
            pet[0].precipProbability = precip || 0;
            callback(pet);
});
}