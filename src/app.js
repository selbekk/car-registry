var express = require('express'),
    exphbs = require('express-handlebars');

var carDao = require('./dao/car-dao');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.get('/', function(req, res) {
    carDao.getRandomCar(function(car) {
        res.render('single', car);
    });
});

app.listen(8000, function() {
    console.log('listening for connections at localhost:8000');
});