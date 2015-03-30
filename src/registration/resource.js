
var log = require('../util/logger');
var settingsService = require('../configuration/service');

exports.showRegistrationForm = function(req, res, next) {
    log.debug('showing registration form');

    settingsService.getRegistrationConfig()
        .then(function(config) {
            res.render('register', config);
        })
        .catch(next);
};

exports.register = function(req, res, next) {
    log.debug('handling registration of new entry');
    res.sendStatus(201);
};