var Promise = require('promise');

var dao = require('./dao');

function getRegistrationConfig(resolve, reject) {
    return Promise.all([dao.getCarBasics])
        .then(function(result) {
            resolve({
                basics: result[0]
            });
        })
        .catch(reject);
}

exports.getRegistrationConfig = new Promise(getRegistrationConfig);