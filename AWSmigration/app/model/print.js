const fs = require('fs')
const AWS = require('./aws')
const db = require('../../bin/db')
const path = require('path')
const config = require('../../bin/config').aws

exports.filelist = (req, res) => {

    db.File.findAll({
        attributes: ['originalname', 'storedname'],
        where: {
            userid: req.body.userid
        }
    }).then(result => {

        if (result.length == 0) {
            res.json(0)
        } else {
            originalnames = []
            storednames = []

            for (var i = 0; i < result.length; i++) {
                originalnames.push(result[i].originalname)
                storednames.push(result[i].storedname)
            }

            res.json({ originalnames: originalnames, storednames: storednames, len: result.length })
        }
    }).catch((err) => {
        console.log(err)

    })
}

exports.preview = (req, res) => {

    let originalname = req.body.originalname
    let extension = path.extname(originalname)
    let key = req.body.storedname
    let key_filename = path.basename(key)

    const params = {
        Bucket: config.bucket,
        Key: key
    }

    var fileStream = fs.createWriteStream(key_filename)
    let s3Stream = AWS.s3.getObject(params).createReadStream()

    // no suck key: the specified key does not exist
    s3Stream.on('error', (err) => {
        console.error(err)
    })

    s3Stream.pipe(fileStream).on('error', (err) => {
        console.error('FileStream', err)
    }).on('close', () => {
        console.log('Done')

        fs.readFile(key_filename, (err, data) => {

            switch (extension) {
                case '.docx':
                    res.contentType('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
                    break
                case '.xlsx':
                    res.contentType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                    break
                case '.pptx':
                    res.contentType('application/vnd.openxmlformats-officedocument.presentationml.presentation')
                    break
                case '.pdf':
                    res.contentType('application/pdf')
                    break
                case '.doc':
                    res.contentType('application/msword')
                    break
                case '.xls':
                    res.contentType('application/vnd.ms-excel')
                    break
                case '.ppt':
                    res.contentType('application/vnd.ms-powerpoint')
                    break
            }

            res.send(data)
            fs.unlinkSync(key_filename)
        })
    })
}