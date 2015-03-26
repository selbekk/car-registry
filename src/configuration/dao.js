var Promise = require('promise');

var db = require('../db/db');

function getCarBasics(resolve, reject) {
    var sql = 'SELECT * FROM car_basics';
    return db.query(sql)
        .then(function(rows) {
            if(!rows || !rows.length) {
                reject('no rows in car_basics');
            }
            resolve(rows[0]);
        })
        .catch(reject);
}

exports.getCarBasics = new Promise(getCarBasics);