const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '54.215.128.212',
    port: '3306',
    user: 'matcha',
    password: 'matcha',
    database: 'com_aidandlim_matcha'
})

conn.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) {
        connection.release();
    }
    return ;
})

module.exports = conn