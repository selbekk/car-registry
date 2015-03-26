
var log = require('./util/logger');
var settingsService = require('./configuration/service');

exports.showRegistrationForm = function(req, res, next) {
    log.debug('showing registration form');

    settingsService.getRegistrationConfig(function(err, settings) {
        if(err) {
            log.error('error while fetching options for registration form', err);
            return next(err);
        }

        res.render('register', settings);
    });
};

exports.register = function(req, res, next) {
    log.debug('handling registration of new entry');
    res.sendStatus(201);
};