const fs = require('fs')
const models = require('../../../bin/db')

exports.filelist = (req, res) => {

    models.File.findAll({
        attributes: ['originalname', 'storedname'],
        where: {
            userid: req.body.userid
        }
    }).then( result => {

        if(result.length == 0){
            res.json(0)
        } else {
            originalnames = []
            storednames = []

            for(var i = 0; i < result.length; i++){
                originalnames.push(result[i].originalname)
                storednames.push(result[i].storedname)
            }

            res.json({originalnames: originalnames, storednames: storednames, len: result.length})
        }
    }).catch( (err) => {
        console.log(err)

    })
}

exports.preview = (req, res) => {
    var path = "/home/ubuntu/KNUP/KNUP_Server/data/uploads/" 

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
        
        res.send(data);
    })
}
