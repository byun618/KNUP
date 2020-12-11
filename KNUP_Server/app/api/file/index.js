const express = require('express');
const router = express.Router();
const multer = require('multer')
const file = require('./file')

const { FILE_PATH : path } = process.env;

const upload = multer({dest: path})

router.post('/upload', upload.array('userfile'), file.upload)

module.exports = router;

