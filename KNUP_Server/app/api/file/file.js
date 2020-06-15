const models = require('../../models')

exports.upload = (req, res) => {

    path = pad(req.files[0].path.substring(8,14))
    res.render('print_submit_result', {code : path});
}

function pad(n) {
    n = n + '';
    return n.length >= 6 ? n : new Array(6 - n.length + 1).join('0') + n;
  }