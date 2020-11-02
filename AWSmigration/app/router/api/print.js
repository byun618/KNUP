const express = require('express')
const router = express.Router()
const src = require('../../model/print')

module.exports = router

router.post('/filelist', src.filelist)
router.post('/preview', src.preview)
