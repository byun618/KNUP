const models = require('../../models')

exports.upload = (req, res) => {
    
    models.Code.findAll().then( (result) => {
        var arr = []
        var code
        let files = req.files
        
        /* DB에서 code 리스트들을 뽑아서 리스트로 만든후 중복 안되게 코드 생성 및 디비에 저장 */
        for(var i = 0; i < result.length; i++) {
            console.log('asd:', result[i].code)
            arr.push(result[i].dataValues.code)
        }
        do {
            code = pad(Math.floor(Math.random() * 1000000))
        } while(!notSame(code))

        console.log(code)
        models.Code.create({
            code: code
        }).then( () => {

            for(var i = 0; i < files.length; i++){
                models.File.create({
                    code: code,
                    filename: files[i].filename
                }).catch( (err) => {
                    console.log(err)
                })
            }
            
        }).catch( (err) => {
            console.log(err)
        })


        
        function notSame(n) {
            return arr.every((e) => n !== e)
        }
    })

    //console.log(req.files)
    res.send(req.files.filename)

    //code = req.files[0].path.substring(8,14)

    // models.Code.create({
    //     code: code
    //   }).catch( (err) => {
    //     console.log(err)
    //   })    

    // for(var i = 0; i < req.files.length; i++) {
    //     models.File.create({
    //         file_name: req.files[i].filename,
    //         code: code
    //     }).catch( (err) => {
    //         console.log(err)
    //     })
    // }


    //res.render('print_submit_result', {code : code});
}

function pad(n) {
    n = n + '';
    return n.length >= 6 ? n : new Array(6 - n.length + 1).join('0') + n;
  }