exports.upload = (req, res) => {

    var path = req.file.path;
    path = path.substring(8,14)

    //res.json(req.file);
    console.log(path);

    res.render('result', {code : path});
}

