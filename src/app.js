var express = require('express');
var exphbs = require('express-handlebars');
var _ = require('underscore');

var carDao = require('./dao/car-dao');
var optionsDao = require('./dao/options-dao');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.get('/', function(req, res) {
    carDao.getRandomCar(function(car) {
        res.render('single', car);
    });
});

app.get('/register', function(req, res) {
    optionsDao.getSettings(function(settings) {
        settings.years = [];
        var min = _.min(settings.models, function(model) {
            return model.from_year;
        }).from_year;
        var max = _.max(settings.models, function(model) {
            return model.to_year;
        }).to_year ;

        if( min && max ) {
            for(var i = 0; i <= max - min; i++) {
                settings.years.push(parseInt(min) + i);
            }
        }



        res.render('register', settings);
    })
});

app.post('/register', function(req, res) {

});

app.listen(8000, function() {
    console.log('listening for connections at localhost:8000');
});