const express = require('express');
const router = express.Router();

module.exports = router;

/* API 라우팅 */
router.use('/file', require('./file'))
router.use('/print', require('./print'))
router.use('/kakao', require('./kakao'))

