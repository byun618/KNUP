const express = require('express');
const router = express.Router();
const request = require('request');
const { json } = require('express');

const REST_API_KEY = '7e5d1c5a3647aead2c2abadcedbe6754';
const REDIRECT_URI = 'http://localhost:3000/api/kakao/login';
const ADMIN_KEY = 'ffdce5ce2d5d6bd3fe17aed1ec63d1fd';

var ACCESS_TOKEN;
var USER_ID;
var nickname;

// kakao 로그인 연동 콜백
exports.login = (req, res) => {

    var AUTHORIZE_CODE = req.query.code;
    console.log(AUTHORIZE_CODE);

    var dataString = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`;
    var headers = 'application/x-www-form-urlencoded';
    var options = {
        url : 'https://kauth.kakao.com/oauth/token',
        headers : headers,
        body : dataString

    };

    function callback(error, response, body) {
        
        if (!error && response.statusCode == 200) { 
            console.log(body);
           
            parseJson = JSON.parse(body)
            ACCESS_TOKEN = parseJson.access_token;
           
            console.log(ACCESS_TOKEN);
            
            request.get({
                url: "https://kapi.kakao.com/v2/user/me",
                headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`
                }
                
            }, async (err, response, body) => {
                try{
                    await console.log(body);
                    
                    parseJson = JSON.parse(body)
                    USER_ID = parseJson.id

                } catch(err) {
                    console.log(error);
                }
            }) 
        }
    }
    
    request.post(options, callback);
    res.redirect('/KNUP');
}

exports.charge = (req, res) => {



    console.log('asd')
    res.send('asd')
}

exports.logout = (req, res) => {

    console.log(USER_ID)
    console.log(ACCESS_TOKEN)
    request.post({
        url: "https://kapi.kakao.com/v1/user/unlink",
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    }, (err, res, body) => {
        console.log(res)
        console.log(body)
    })
    res.redirect('/KNUP/login')
}