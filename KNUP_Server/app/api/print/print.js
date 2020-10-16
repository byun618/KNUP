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
            res.render('filelist', {originalnames: originalnames, storednames: storednames, length: result.length, code: req.body.code})
        }
    }).catch( (err) => {

        res.redirect('/KNUP/print')
    })
}

exports.preview = (req, res) => {
    var path = "/Users/sanghyunbyun/Desktop/KNUP/KNUP_Server/bin/uploads/" 

    origin = req.body.originalname
    stored = req.body.storedname

    split = origin.split('.')
    end = split.length - 1
    format = split[end]

    path += stored

    fs.readFile(path, (err, data) => {

        switch (format) {
            case 'docx':
                res.contentType('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
                break
            case 'xlsx':
                res.contentType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                break
            case 'pptx':
                res.contentType('application/vnd.openxmlformats-officedocument.presentationml.presentation')
                break
            case 'pdf':
                res.contentType('application/pdf')
                break
            case 'doc':
                res.contentType('application/msword')
                break
            case 'xls':
                res.contentType('application/vnd.ms-excel')
                break
            case 'ppt':
                res.contentType('application/vnd.ms-powerpoint')
                break
    
        }

        console.log(data)
        
        res.send(data);
    })
}