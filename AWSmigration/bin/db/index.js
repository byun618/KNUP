const Sequelize = require('sequelize');
let config = require('../config').db

var db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.File = require('./file')(sequelize, Sequelize)

module.exports = db;
