var express = require('express');
var app = express();
var port = process.env.PORT || 2000;
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

routes(app);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port);

console.log('Web Site Started.')