const express = require('express');
const request = require('request');
const { json } = require('express');

const { REST_API_KEY } = process.env;
const { REDIRECT_URI } = process.env;
const { ADMIN_KEY } = process.env;

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
        sess.islogin = 'true'

        res.redirect('/KNUP')
    })   
}

exports.logout = (req, res) => {


    request.post({
        url: "https://kapi.kakao.com/v1/user/unlink",
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }, (err, res, body) => {
        parseJson = JSON.parse(body)
    })

    req.session.destroy( () => {
        req.session
    })
    res.redirect('/KNUP')
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

  



