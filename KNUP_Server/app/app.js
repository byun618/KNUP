const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shell = require('shelljs')

// if(shell.exec('sh ./delete.sh').code !== 0) {
//   shell.echo('Error: command failed')
//   console.log('asd')
//   shell.exit(1)
// }

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('./api/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path')

app.use( express.static(__dirname + '/views'));

app.get('/check', (req, res) => {
	console.log('fine')
	res.send('fine')
})

const request = require('request');
/* 페이지로드 URL */
app.use('/KNUP', require('./views'));
/* API URL */
app.use('/api', require('./api'));

module.exports = app;

