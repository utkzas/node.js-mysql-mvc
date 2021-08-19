const mysql = require('mysql2');

const config = require('../config/config.json');

//create a connection to db pool
// Connection made to MySQL !!!!!!!!!!!!!!!!!!!!!!!!!!! YAY !!!!!!
const pool = mysql.createPool({
    host: config.host,
    user:  config.user,
    database: config.database,
    password: config.password
});

module.exports = pool.promise();