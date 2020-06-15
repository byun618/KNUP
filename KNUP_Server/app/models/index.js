var path = require('path');
var Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development'; 
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]; 
var db = {};

var sequelize =new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Code = require('./code')(sequelize, Sequelize)
db.File = require('./file')(sequelize, Sequelize)

db.Code.hasOne(db.File, {foreignKey: 'code'})

module.exports = db;