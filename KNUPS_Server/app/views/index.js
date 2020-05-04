const express = require('express');
const router = express.Router();

module.exports = router;

/* Session */
    // let session = req.session;

    // res.json({
    //     session : session
    // });

/* 
    /views/user 
    프린트 신청할때
*/
router.get('/user', (req, res) => res.render('./user'));
router.get('/user/signup', (req, res) => res.render('./user/signup'));

/* 
    /views/print 
    인증코드 입력
*/
router.get('/print', )

