const express = require('express');
const router = express.Router();

module.exports = router;

/* 로드하고자 하는 페이지 URL 설정 및 rendring */
router.get('/', (req, res) => res.render('index')); //home
router.get('/login', (req,res) => res.render('kakao_main')); //kakaomain

// router.get('/print_submit',(req,res) => res.render('print_submit')); //프린트신청
// router.get('/print',(req,res) => res.render('print')); //프린트
// router.get('/print_submit_result',(req,res) => res.render('print_submit_result')); //프린트신청 결과

