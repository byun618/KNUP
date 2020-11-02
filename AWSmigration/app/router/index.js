const express = require('express')
const router = express.Router()

router.get('/check', (req, res) => {
	console.log('fine')
	res.send('fine')
})

// Route to View (views)
router.use('/KNUP', require('./views'))

// Route to model (src)
router.use('/api', require('./api'))

module.exports = router
