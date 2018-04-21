var express = require('express');
var app = express();
var port = process.env.PORT || 2000;
var bodyParser = require('body-parser');
var routes = require('./routes/routes');



app.set('view engine', 'ejs');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

routes(app);

app.listen(port);


app.use(function(err, req, res, next){
    res.status(400).json(err);
  });
console.log('Web Site Started.')