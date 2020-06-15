const express = require('express');
const router = express.Router();
const print = require('./print')

module.exports = router;

router.post('/filelist', print.filelist) //show the list of files to print
router.post('/preview', print.preview) //show preview of file
