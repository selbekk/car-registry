var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var _ = require('underscore');
var morgan = require('morgan');

var registrationRouter = require('./registration/router');
    /// DELETE
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

app.post('/register', function(req, res) {
    carDao.create(req.body, function(err, entity) {
        if(err) {
            throw err;
        }

        return res.status(201).send(entity);
    });
});

app.listen(8000, function() {
    console.log('listening for connections at localhost:8000');
});