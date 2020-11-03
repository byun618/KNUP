const multer = require('multer')
const multerS3 = require('multer-s3')
const db = require('../../bin/db')
const AWS = require('./aws')
const config = require('../../bin/config').aws

exports.upload_module = multer({
    storage: multerS3({
        s3: AWS.s3,
        bucket: config.bucket,
        key: (req, file, cb) => {
            cb(null, "uploads/" + Math.floor(Math.random() * 1000).toString() + Date.now().toString())
        }
    })
})

exports.upload = (req, res) => {
    let files = req.files
    let userid = req.session.userid

    files.forEach(file => {

        db.File.create({
            originalname: file.originalname,
            storedname: file.key,
            userid: userid
        }).catch((err) => {
            console.log(err)
        })
    });

    res.redirect('/KNUP');
}