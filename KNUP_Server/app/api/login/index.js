const express = require('express');
const router = express.Router();
const login = require('./login');
const request = require('request');

module.exports = router;

router.get('/callback', login.getCode);

router.get('/auth', login.auth);