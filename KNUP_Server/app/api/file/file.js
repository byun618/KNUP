const multer = require('multer');

exports.upload = (req, res) => {

    res.json(req.file);
    console.log(req.file.filename);
}

