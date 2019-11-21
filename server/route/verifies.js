const conn = require('../config/db');

module.exports.signup = (req, res) => {
    let sql_select_verifies = 'SELECT id FROM verifies AS v LEFT JOIN users AS u ON v.user_id = u.id WHERE u.user_id = ? AND uuid = ?';
    let sql_delete_verifies = 'DELETE FROM verifies AS v LEFT JOIN users AS u ON v.user_id = u.id WHERE u.user_id = ? AND uuid = ?';
    let sql_update_users = 'UPDATE users SET verify = 1 WHERE user_id = ?';

    let email = req.query.email;
    let code = req.query.code;

    conn.query(sql_select_verifies, [email, code], (err, results) => {
        if (err) {
            console.log(err);
        } else if (results.length !== 0) {
            conn.query(sql_delete_verifies, [email, code], (err) => {
                if (err) {
                    console.log(err);
                }
            })
            conn.query(sql_update_users, [email], (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
}