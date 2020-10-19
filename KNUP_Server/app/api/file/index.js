const express = require('express');
const router = express.Router();
const multer = require('multer')
const file = require('./file')
const upload = multer({dest: '/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/data/uploads/'})

router.post('/upload', upload.array('userfile'), file.upload)

module.exports = router;

