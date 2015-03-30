var fs = require('fs');
var Promise = require('promise');

var readFile = Promise.denodeify(fs.readFile);

function getRegistrationConfig() {
    return readFile(__dirname + '/settings.json', 'utf-8').then(JSON.parse);
}

exports.getRegistrationConfig = getRegistrationConfig;