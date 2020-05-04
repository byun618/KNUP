const app = require('../app/app');
const port = 3000;
const syncDatabase = require('./sync-database');

app.listen(port, () => {
    console.log('Connected port 3000');

    syncDatabase().then(() => {
        console.log('Database Sync');
    })
});