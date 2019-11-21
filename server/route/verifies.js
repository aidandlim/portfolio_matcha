const conn = require('../config/db');

module.exports.signup = (req, res) => {
    let sql = 'INSERT INTO verifies (user_id, uuid) values (?, ?)';

    let email = req.query.email;
    let code = req.query.code;
}