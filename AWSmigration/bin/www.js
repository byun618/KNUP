const app = require('../app/app');
const db = require('./db')
let config = require('./config')

const port = config.web.port

app.listen(port, () => {
    console.log('Connected port', port);

    db.sequelize.sync({force: true}).then(() => {
        console.log('Database Sync')
    })
});
