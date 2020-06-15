const fs = require('fs')

exports.filelist = (req, res) => {

    var path = '/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/'
    path += req.body.code

    fs.readdir(path, (err, filelist) => {
        if(err){
            res.redirect('/KNUP/print')
        } else {
            res.render('filelist', {filelist: filelist, length: filelist.length, code: req.body.code})
        }
    })
}

exports.preview = (req, res) => {
    var path = "/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/" 
    //path += req.body.code + "/" + req.body.filename
    path += 'd04ab92902091b540d8c1e4db87ea7bf'

    fs.readFile(path, (err, data) => {
        res.contentType('application/pdf')
        res.send(data);
    })
}