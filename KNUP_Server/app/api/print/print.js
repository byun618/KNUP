const fs = require('fs')

exports.filelist = (req, res) => {

    var path = '/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/'
    path += req.body.code

    fs.readdir(path, (err, filelist) => {
        if(err){
            
        }
        res.render('filelist', {filelist: filelist, length: filelist.length, code: req.body.code})
    })
}

exports.preview = (req, res) => {
    var path = "/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/" 
    path += req.params.code + "/" + req.params.filename
    
    fs.readFile(path, (err, data) => {
        res.contentType('application/pdf')
        res.send(data);
    })
}