const app = require('../app/app');
const syncDatabase = require('./sync-database');
const path = require("path");


const { PORT : port } = process.env; 

app.listen(port, () => {
    console.log('Connected port', port);

    syncDatabase().then(() => {
        console.log('Database Sync');
    })
});
