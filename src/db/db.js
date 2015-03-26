var mysql = require('mysql');
var Promise = require('promise');

var log = require('../util/logger');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: '',
    password: '',
    database: 'registry'
});

pool.getConnection(function(err, connection) {
    if(err) {
        log.error('Could not connect to database! ' + err.stack);
        throw err;
    }
    log.info('Connected to database!');
    connection.release();
});

var getAConnection = Promise.denodeify(pool.getConnection);

function query(sql) {
    return getAConnection
        .then(function(connection) {
            log.info('sql: ' + sql);
            connection.release();
        })
        .catch(function(err) {
            log.error(err);
        });
}

exports.query = query;