var request = require('request');

exports.GetListOfPets = (callback) =>
{
    request('https://shelterapi.herokuapp.com/pets', 
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