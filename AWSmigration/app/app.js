const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path')

// View file path
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/js', express.static('../data/js'))
app.use('/img', express.static('../data/img'))
app.use('/css', express.static('../data/css'))
app.use('/fonts', express.static('../data/fonts'))

app.use(session({
	secret: 'knup',
	resave: false,
	saveUninitialized: true
}))

app.use('/', require('./router'))

module.exports = app;

