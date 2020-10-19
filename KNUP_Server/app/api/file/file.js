const models = require('../../../bin/db')

exports.upload = (req, res) => {
    let files = req.files
    let userid = req.session.userid

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