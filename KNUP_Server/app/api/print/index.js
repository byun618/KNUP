const express = require('express');
const router = express.Router();
const print = require('./print')

module.exports = router;

router.post('/filelist', print.filelist) //show the list of files to print
router.get('/preview/:code/:filename', print.preview) //show preview of file
//post로 바꿀것