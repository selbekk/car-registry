var express = require('express');

var registrationResource = require('./resource');

var router = express.Router();

router.route('/')
    .get(registrationResource.showRegistrationForm)
    .post(registrationResource.register);

module.exports = router;