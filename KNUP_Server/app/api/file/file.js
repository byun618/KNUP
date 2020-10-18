const models = require('../../models')
const request = require('request');

exports.upload = (req, res) => {
    let files = req.files
    let userid = req.session.userid
    let nickname = req.session.nickname

    for(var i = 0; i < files.length; i++){
        
        models.File.create({
            
            originalname: files[i].originalname,
            storedname: files[i].filename,
            userid: userid

        }).catch( (err) => {
            console.log(err)
        })
    }

    res.redirect('/KNUP');

}