// jshint esversion:6
const express = require('express');
const router = express.Router();


// Load Controllers
const {
     registerController
} = require('../controllers/auth.controller.js');

// Load Validations
const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid');

router.post('/register',
validSign,
registerController);

router.post('/activation', activationController);


module.exports = router;