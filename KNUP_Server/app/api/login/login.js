const express = require('express');
const router = express.Router();

const login = require('./login');

const request = require('request');
const { json } = require('express');

var REST_API_KEY = '7e5d1c5a3647aead2c2abadcedbe6754';
var REDIRECT_URI =  'http://localhost:3000/api/login/callback' ;

var ACCESS_TOKEN;
var nickname;


// kakao 로그인 연동 콜백
exports.getCode = (req, res) => {


      var AUTHORIZE_CODE = req.query.code;
        console.log(AUTHORIZE_CODE);

    
        var dataString = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`;
        var headers = 'pplication/x-www-form-urlencoded';
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
                 
                  
                  
                  }catch(err){
                        console.log(error);
                  }
              })
        
                  
                }
        }
    

request.post(options,callback);
res.redirect('/KNUP');

}


exports.auth = (req, res) => {
   res.send(nickname);

   



   
}
