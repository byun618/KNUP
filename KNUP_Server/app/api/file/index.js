const express = require('express');
const router = express.Router();
const file = require('./file')

router.use('/upload', require('./fileUpload'))

module.exports = router;

