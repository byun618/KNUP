const express = require('express');
const router = express.Router();

router.use('/upload', require('./fileUpload'))

module.exports = router;

