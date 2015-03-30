var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var _ = require('underscore');
var morgan = require('morgan');
var registrationRouter = require('./registration/router');
var log = require('./util/logger');

var carDao = require('./dao/car-dao');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(morgan('tiny'));
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/register', registrationRouter);

app.get('/', function(req, res) {
    carDao.getRandomCar(function(car) {
        res.render('single', car);
    });
});

app.listen(8000, function() {
    log.info('Server is up and running! Now listening for connections at localhost:8000...');
});