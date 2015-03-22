var express = require('express');

var app = express();

app.use(express.static('static'));

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(8000, function() {
    console.log('listening for connections at localhost:8000');
});