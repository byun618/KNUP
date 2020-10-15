const express = require('express');
const router = express.Router();
const kakao = require('./kakao');
const request = require('request');

module.exports = router;

router.get('/login', kakao.login);
router.get('/logout', kakao.logout);
router.post('/charge', kakao.charge);

// 결제 성공시
router.get('/payment/success', (req, res) => {
    console.log(req.body)
    res.send('success')
})

// 결제 실패시
router.get('/payment/fail', (req, res) => {
    res.send('fail')
})

// 결제 취소시
router.get('/payment/cancel', (req, res) => {
    res.send('cancel')
})