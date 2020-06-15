const fs = require('fs')
const models = require('../../models')

exports.filelist = (req, res) => {

    models.File.findAll({
        attributes: ['originalname', 'storedname'],
        where: {
            code: req.body.code
        }
    }).then( (result) => {

        if(result.length == 0){
            res.redirect('/KNUP/print')
        } else {
            originalnames = []
            storednames = []
            for(var i = 0; i < result.length; i++){
                originalnames.push(result[i].originalname)
                storednames.push(result[i].storedname)
            }
            res.render('filelist', {filelist: originalnames, filepath: storednames, length: result.length, code: req.body.code})
        }
    }).catch( (err) => {

        res.redirect('/KNUP/print')
    })
}

exports.preview = (req, res) => {
    var path = "/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/" 
    //path += req.body.code + "/" + req.body.filename
    path += req.body.filename

    console.log(path)
    fs.readFile(path, (err, data) => {
        res.contentType('application/pdf')
        res.send(data);
    })
}