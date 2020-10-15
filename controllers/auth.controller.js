
// jshint esversion:6

const User = require('../modals/auth.modal');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');


const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
// const { errorHandler } = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.MAIL_KEY);

exports.registerController = (req, res)=>{
    const{name, email,password} = req.body;
    console.log(name, email,password);
};