const express = require('express');
const router = express.Router();
const fs = require('fs')

module.exports = router;

router.post('/filelist', (req, res) => {

    var path = '/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/'
    path += req.body.code

    fs.readdir(path, (err, filelist) => {
        res.render('filelist', {filelist: filelist, length: filelist.length, code: req.body.code})
    })
})

router.get('/preview/:code/:filename', (req, res) => {

    var path = "/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/" 
    path += req.params.code + "/" + req.params.filename
    
    fs.readFile(path, (err, data) => {
        res.contentType('application/pdf')
        res.send(data);
    })
})