const express = require('express');
const router = express.Router();

module.exports = router;

/* 새로운 API 생기면 추가 */
router.use('/test', require('./test'))
router.use('/user', require('./user'))



