var request = require('request');

exports.GetListOfPets = () =>
{
    request('https://shelterapi.herokuapp.com/pets', function (error, response, body) {
     console.log(body);
});
}