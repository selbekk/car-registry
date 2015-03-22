var express = require('express'),
    exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.get('/', function(req, res) {
    res.render('frontpage');
});

app.listen(8000, function() {
    console.log('listening for connections at localhost:8000');
});