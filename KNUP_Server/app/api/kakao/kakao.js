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
            console.log('111', body);
           
            parseJson = JSON.parse(body)
            ACCESS_TOKEN = parseJson.access_token;
           
            
            request.get({
                url: "https://kapi.kakao.com/v2/user/me",
                headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`
                }
                
            }, async (err, response, body) => {

                
                    await console.log(body);

                try{
                    await console.log('222', body);

                    
                    parseJson = JSON.parse(body)
                    USER_ID = parseJson.id

                    nickname = parseJson.properties.nickname;

                    await res.render('index', {nickname : nickname});

                    models.Kakao.create({
                        id : USER_ID,
                        nickname : nickname
                    }) .then(result => {
                        res.json(result);
                     })
                     .catch(err => {
                        console.error(err);
                     });
                  
                

                   

                } catch(err) {
                    console.log(error);
                }

            }) 
        }
    }
    
    request.post(options, callback);
    
}

exports.charge = (req, res) => {
    
    request.post({
        url: "https://kapi.kakao.com/v1/payment/ready",
        headers: {
            Authorization: `KakaoAK ${ADMIN_KEY}`,
            // "Content-Type" : 
        },
        form: {
            cid: 'TC0ONETIME',
            partner_order_id: '1',
            partner_user_id: '1',
            item_name: '초코파이',
            quantity: 1,
            total_amount: 2200,
            vat_amount: 200,
            tax_free_amount: 0,
            approval_url: 'http://localhost:3000/api/kakao/payment/success',
            fail_url: 'http://localhost:3000/api/kakao/payment/fail',
            cancel_url: 'http://localhost:3000/api/kakao/payment/cancel'
        }
        ,followRedirect: true
        
    }, (err, response, body) => {

        parseJson = JSON.parse(body)

        console.log(parseJson)
        res.redirect(parseJson.next_redirect_pc_url)
    })

    
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

exports.sendCode = (req, res) => {

        headers = {
            Authorization: `Bearer ${ACCESS_TOKEN}`
            
        }       
      
      
        var options = {
            url : `https://kapi.kakao.com/v2/api/talk/memo/send?template_id=23612`,
            headers : headers,
            template_args: {
                key: req.body.code
            } 
          
           
    
        };

        function callback(error, response, body) {
        
            if (!error) { 
                console.log('asd', body);
                //console.log(code);
                res.render('index', {nickname : nickname});
            }
        }

        request.post(options, callback);
        
    }

  



