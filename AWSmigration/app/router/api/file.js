const express = require('express')
const router = express.Router()
const src = require('../../model/file')
const upload = src.upload_module

module.exports = router

router.post('/upload', upload.array('userfile'), src.upload)