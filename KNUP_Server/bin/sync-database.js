const models = require('./db');

module.exports = () => {
    return models.sequelize.sync({force: true});
}