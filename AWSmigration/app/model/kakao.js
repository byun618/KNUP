const request = require('request')
const { json } = require('express')
let config = require('../../bin/config').kakao

let code
let access_token

exports.oauth = (req, res) => {
    
    code = req.query.code
    
    var dataString = `grant_type=authorization_code&client_id=${config.rest_api_key}&redirect_uri=${config.redirect_uri}&code=${code}`;

    request.post({
        url: config.token_uri,
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
        url: config.user_uri,
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
        url: config.unlink_uri,
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