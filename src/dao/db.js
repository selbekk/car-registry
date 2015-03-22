var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: '',
    password: '',
    database: 'registry'
});

pool.getConnection(function(err) {
    if(err) {
        console.log('Could not connect to database');
        throw err;
    }
    console.log('Connected to database!');
});

module.exports = {
    getConnection: function(callback) {
        pool.getConnection(function(err, connection) {
            if(err) {
                throw err;
            }
            callback(connection);
        });
    }
};