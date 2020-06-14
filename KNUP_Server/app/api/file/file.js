const models = require('../../models')

exports.upload = (req, res) => {

    var files = req.files;
    // var filecount = files.length;

    var path = req.files[0].path;

    // for(var i = 0; i < filecount; i++) {
    //     console.log(req.files[i]);
    // }
    
    path = pad(path.substring(8,14))
   
    // console.log(path);

    res.render('result', {code : path});
}

function pad(n) {
    n = n + '';
    return n.length >= 6 ? n : new Array(6 - n.length + 1).join('0') + n;
  }