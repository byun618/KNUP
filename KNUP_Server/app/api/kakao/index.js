const express = require('express');
const router = express.Router();
const kakao = require('./kakao');
const request = require('request');

module.exports = router;

router.get('/login', kakao.login);
router.get('/logout', kakao.logout);
router.post('/charge', kakao.charge);
router.post('/sendCode', kakao.sendCode);