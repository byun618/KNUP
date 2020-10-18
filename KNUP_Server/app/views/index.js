// const  } = require('express');
const express = require('express');
const { resolve } = require('path');
const router = express.Router();
const models = require('../models')
const request = require('request')

module.exports = router;

/* 로드하고자 하는 페이지 URL 설정 및 rendring */
router.get('/', async (req, res) => {

    await sleep(100)

    request.post({
        url: 'http://localhost:3000/api/print/filelist',
        body: {
            userid: req.session.userid
        },
        json: true
    }, (error, response, body) => {
        console.log(body)
        res.render('index', {nickname:req.session.nickname})
    })

}); //home

router.get('/login', (req,res) => res.render('kakao_main')); //kakaomain

const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

// router.get('/print_submit',(req,res) => res.render('print_submit')); //프린트신청
// router.get('/print',(req,res) => res.render('print')); //프린트
// router.get('/print_submit_result',(req,res) => res.render('print_submit_result')); //프린트신청 결과

