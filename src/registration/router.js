var express = require('express');

var registrationResource = require('./registration/resource');

var router = express.Router();

router.route('/')
    .get(registrationResource.showRegistrationForm)
    .post(registrationResource.register);
