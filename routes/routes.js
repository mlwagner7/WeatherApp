

module.exports = function (app) {
    var homeController = require('../web/controller/HomeController');
    
    app.route('/')
        .get(homeController.Index);
    // app.post('/', homeController.Post);
}

