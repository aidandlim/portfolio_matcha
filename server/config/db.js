const mysql = require('mysql');

exports.module = mysql.createConnection({
    host: '54.215.128.212',
    port: '3306',
    user: 'matcha',
    password: 'matcha',
    database: 'com_aidandlim_matcha'
}).connect();