const express = require('express');
const router = express.Router();
const multer = require('multer')
const file = require('./file')
const upload = multer({dest: 'uploads/'})

// router.post('/upload', upload.array('userfile'), file.upload)
router.use('/upload', require('./fileUpload_backup'))

module.exports = router;

