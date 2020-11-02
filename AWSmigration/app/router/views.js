const express = require('express')
const router = express.Router()
const request = require('request')
const web_config = require('../../bin/config').web
const kakao_config = require('../../bin/config').kakao

router.get('/', async (req, res) => {

    if (req.session.islogin) {

        await sleep(500)

        url = web_config.host + '/api/print/filelist'
 
        request.post({
            url: url,
            body: {
                userid: req.session.userid
            },
            json: true
        }, (error, response, body) => {

            let originalnames = body.originalnames
            let originalnames_arr = []
            let storednames_arr = []

            if (body != 0) {
                originalnames_arr = Array.from(originalnames)
                storednames_arr = Array.from(storednames)
            }

            res.render('index',
                {
                    nickname: req.session.nickname,
                    originalnames: originalnames_arr,
                    storednames: storednames_arr,
                    length: body.len
                })
        })
    } else {

        res.redirect('/KNUP/login')
    }
})

router.get('/login', (req, res) => {
    res.render('kakao_main', { rest_api_key: kakao_config.rest_api_key, redirect_uri: kakao_config.redirect_uri })
})

const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

module.exports = router