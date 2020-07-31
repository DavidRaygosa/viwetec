'use strict'

var express = require('express');

// Controllers

var EmailController = require('../controllers/controller_email');

var router = express.Router();

// MiddleWare

var multipart = require('connect-multiparty');
var multipartMiddleWare = multipart({uploadDir: './uploads'});

// Routes

	// Email
		router.post('/send-email', EmailController.sendEmail);

module.exports = router;