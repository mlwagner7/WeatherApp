

module.exports = function (app) {
    var homeController = require('../web/controller/HomeController');
    var createController = require('../web/controller/CreateController');
    
    app.route('/')
        .get(homeController.Index);
    // app.post('/', homeController.Post);
    app.route('/create')
        .get(createController.Index)
        .post(createController.Create)

    app.route('/pet/:petId')
        .get(homeController.petUmbrella);
}

