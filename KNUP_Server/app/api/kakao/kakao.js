const express = require('express');
const router = express.Router();
const request = require('request');
const { json } = require('express');

const models = require('../../models');

const REST_API_KEY = '7e5d1c5a3647aead2c2abadcedbe6754';
const REDIRECT_URI = 'http://localhost:3000/api/kakao/oauth';
const ADMIN_KEY = 'ffdce5ce2d5d6bd3fe17aed1ec63d1fd';


var USER_ID;
var nickname;

let code
let access_token;

exports.oauth = (req, res) => {

    code = req.query.code
    
    var dataString = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

    request.post({
        url: 'https://kauth.kakao.com/oauth/token',
        headers: 'application/x-www-form-urlencoded;charset=utf-8',
        body: dataString
        
    }, (error, response, body) => {
        
        j_body = JSON.parse(body)
        access_token = j_body.access_token
        
        res.redirect('/api/kakao/login')
    })   
}
exports.login = (req, res) => {

    request.get({
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }, (error, response, body) => {
        
        sess = req.session
        j_body = JSON.parse(body)

        sess.userid = j_body.id
        sess.nickname = j_body.properties.nickname

        // console.log(j_body)
        res.redirect('/KNUP')
    })   
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

  



