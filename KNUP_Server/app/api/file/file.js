const multer = require('multer');

exports.upload = (req, res) => {
   

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/');
          console.log('asd');
          
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now());
          console.log('asddd');
         
        }
      })
      
      var upload = multer({ storage: storage })

    res.json(req.file);
    console.log(req.file.filename);
}

