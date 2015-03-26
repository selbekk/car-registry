
var log = require('../util/logger');
var settingsService = require('../configuration/service');

exports.showRegistrationForm = function(req, res, next) {
    log.debug('showing registration form');

    settingsService.getRegistrationConfig
        .then(function(settings) {
            res.render('register', settings);
        })
        .catch(function(err) {
            log.error('error while fetching options for registration form', err);
            return next(err);
        });
};

exports.register = function(req, res, next) {
    log.debug('handling registration of new entry');
    res.sendStatus(201);
};