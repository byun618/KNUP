const express = require('express')
const router = express.Router()

module.exports = router

router.use('/kakao', require('./kakao'))
router.use('/print', require('./print'))
router.use('/file', require('./file'))