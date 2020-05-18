const express = require('express');
const router = express.Router();

module.exports = router;

/* 새로운 API 생기면 추가 */
router.use('/test', require('./test'))
router.use('/user', require('./user'))

router.post('/printform', function(req, res) {
    console.log(req.body);
    // 여기에 값 넣음
    var item=req.body.item;
    //res.send(item);
    res.redirect("/KNUP/result");
})



