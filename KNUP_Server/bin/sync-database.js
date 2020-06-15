const models = require('../app/models');

module.exports = () => {
    // console.log(models.sequelize.sync({force: config.force})); 
    return models.sequelize.sync({force: true});
}