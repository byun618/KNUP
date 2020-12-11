const express = require('express');
const router = express.Router();
const kakao = require('./kakao');
const request = require('request');

module.exports = router;


router.get('/oauth', kakao.oauth)
router.get('/login', kakao.login)

router.get('/logout', kakao.logout);

router.get('/sendCode', kakao.sendCode);


