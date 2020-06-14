const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('./api/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    key: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    // store: new fileStore(), //save session to file
    cookie: {
      maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
    }
}));

/* 페이지로드 URL */
app.use('/KNUP', require('./views'));
/* API URL */
app.use('/api', require('./api'));

module.exports = app;

