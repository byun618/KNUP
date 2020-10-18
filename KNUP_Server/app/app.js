const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shell = require('shelljs')
const session = require('express-session')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '/../.env') });


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('./api/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static(__dirname + '/views'));

app.use(session({
	secret: 'knup',
	resave: false,
	saveUninitialized: true
}))

app.get('/check', (req, res) => {
	console.log('fine')
	res.send('fine')
})

/* 페이지로드 URL */
app.use('/KNUP', require('./views'));
/* API URL */
app.use('/api', require('./api'));

app.get('/', (req, res) => {
	id = req.session.userid

	console.log(id)
	res.send('id')
})
module.exports = app;

