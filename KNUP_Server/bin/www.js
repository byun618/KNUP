const app = require('../app/app');
const port = 3008;
const syncDatabase = require('./sync-database');

app.listen(port, () => {
    console.log('Connected port', port);

    syncDatabase().then(() => {
        console.log('Database Sync');
    })
});