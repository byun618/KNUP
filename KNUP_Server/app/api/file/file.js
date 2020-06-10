exports.upload = (req, res) => {

    var files = req.files;
    var filecount = files.length;

    var path = req.files[0].path;

    for(var i = 0; i < filecount; i++) {
        console.log(req.files[i]);
    }
    
    path = path.substring(8,14)
   
    console.log(path);

    res.render('result', {code : path});
}

