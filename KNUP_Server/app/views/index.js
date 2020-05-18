const express = require('express');
const router = express.Router();

module.exports = router;

/* Session */
    // let session = req.session;

    // res.json({
    //     session : session
    // });

/* 로드하고자 하는 페이지 URL 설정 및 rendring */
router.get('/', (req, res) => res.render('index'));
router.get('/signup', (req, res) => res.render('signup'));
router.get('/printForm',(req,res) => res.render('printForm'));
router.get('/result',(req,res) => res.render('result'));