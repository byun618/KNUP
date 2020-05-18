const express = require('express');
const router = express.Router();
const fs = require('fs')

module.exports = router;

/* Session */
    // let session = req.session;

    // res.json({
    //     session : session
    // });

router.get('/', (req, res) => res.render('index'))
router.get('/preview', (req, res) => {
    var file = "/Users/sanghyunbyun/Desktop/KNUP/KNUPS_Server/app/views/test.pdf"

    fs.readFile(file, (err, data) => {
        res.contentType('application/pdf')
        res.send(data);
    })
});

