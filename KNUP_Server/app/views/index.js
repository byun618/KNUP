const express = require('express');
const router = express.Router();

module.exports = router;

/* Session */
    // let session = req.session;

    // res.json({
    //     session : session
    // });

router.get('/', (req, res) => res.render('signup'));

