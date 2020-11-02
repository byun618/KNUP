const express = require('express')
const router = express.Router()
const src = require('../../model/kakao')

module.exports = router

router.get('/oauth', src.oauth)
router.get('/login', src.login)
router.get('/logout', src.logout)