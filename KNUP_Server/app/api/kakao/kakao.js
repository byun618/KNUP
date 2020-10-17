const express = require('express');
const router = express.Router();
const request = require('request');
const { json } = require('express');

const models = require('../../models');

const REST_API_KEY = '7e5d1c5a3647aead2c2abadcedbe6754';
const REDIRECT_URI = 'http://localhost:3000/api/kakao/login';
const ADMIN_KEY = 'ffdce5ce2d5d6bd3fe17aed1ec63d1fd';

var ACCESS_TOKEN;
var USER_ID;
var nickname;

// kakao 로그인 연동 콜백
exports.login = (req, res) => {

    var AUTHORIZE_CODE = req.query.code;

    var dataString = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`;
    var headers = 'application/x-www-form-urlencoded';
    var options = {
        url : 'https://kauth.kakao.com/oauth/token',
        headers : headers,
        body : dataString
    };

    var sess = req.session

    request.post(options, (error, response, body) => {
        if (!error && response.statusCode == 200) { 
            
            parseJson = JSON.parse(body)
            ACCESS_TOKEN = parseJson.access_token;
            
            request.get({
                url: "https://kapi.kakao.com/v2/user/me",
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
                
            }, (err, response, body) => {
                
                parseJson = JSON.parse(body)
                USER_ID = parseJson.id

                nickname = parseJson.properties.nickname;

                models.User.upsert({
                    userid: USER_ID,
                    nickname: nickname
                }).then( () => {
                    sess.userid = USER_ID
                    sess.nickname = nickname

                    res.render('index', {nickname : nickname});
                }).catch( err => {
                    console.log(err)
                })
            }) 
        }
    });
    
}

exports.logout = (req, res) => {

    request.post({
        url: "https://kapi.kakao.com/v1/user/unlink",
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    }, (err, res, body) => {
        parseJson = JSON.parse(body)
        console.log(parseJson)
    })
    res.redirect('/KNUP/login')
}

exports.sendCode = (req, res) => {

    res.send('asd')

    // headers = {
    //     Authorization: `Bearer ${ACCESS_TOKEN}`
        
    // }     
    
    // var options = {
    //     url : `https://kapi.kakao.com/v2/api/talk/memo/send?template_id=23612`,
    //     headers : headers,
    //     template_args: {
    //         key: req.body.code
    //     } 
    // }

    // function callback(error, response, body) {
    
    //     if (!error) { 
    //         console.log('asd', body);
    //         //console.log(code);
    //         res.render('index', {nickname : nickname});
    //     }
    // }

    // request.post(options, callback);
}

  



