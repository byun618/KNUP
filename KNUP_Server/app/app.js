const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('./api/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path')

app.use( express.static(__dirname + '/views'));

/* 페이지로드 URL */
app.use('/KNUP', require('./views'));
/* API URL */
app.use('/api', require('./api'));

module.exports = app;

