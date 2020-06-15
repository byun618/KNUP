const models = require('../../models')


exports.upload = (req, res) => {
    
    models.Code.findAll().then( (result) => {
        var arr = []
        var code
        let files = req.files
        
        /* DB에서 code 리스트들을 뽑아서 리스트로 만든후 중복 안되게 코드 생성*/
        for(var i = 0; i < result.length; i++) {
            arr.push(result[i].dataValues.code)
        }
        do {
            code = pad(Math.floor(Math.random() * 1000000))
        } while(!notSame(code))

        /* 생성된 코드 디비에 저장 */
        models.Code.create({
            code: code
        }).then( () => {
            /* 파일이름 코드 디비에 저장 */
            for(var i = 0; i < files.length; i++){
                models.File.create({
                    code: code,
                    originalname: files[i].originalname,
                    storedname: files[i].filename
                }).catch( (err) => {
                    console.log(err)
                })
            }
        }).catch( (err) => {
            console.log(err)
        })

        res.render('print_submit_result', {code : code});

        function notSame(n) {
            return arr.every((e) => n !== e)
        }
    })
}

function pad(n) {
    n = n + '';
    return n.length >= 6 ? n : new Array(6 - n.length + 1).join('0') + n;
}