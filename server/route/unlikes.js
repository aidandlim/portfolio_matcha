const mail = require('./mail');

const conn = require('../config/db');

module.exports.insert = (req, res) => {
    const sql = 'INSERT INTO unlikes (from, to) values (?, ?)';

    const userId = req.session.userId;
    const to = req.body.to;

    conn.query(sql, [userId, to], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            const sql_select_to = 'SELECT email FROM users WHERE id = ?';

            conn.query(sql_select_to, [to], (err, results) => {
                if (err) {
                    console.log(err);
                    res.json(0);
                } else {
                    results = JSON.parse(JSON.stringify(results));
                    mail.notification('unlike', userId, results[0].email);
                    res.json(1);
                }
            })
        }
    })
}

//

module.exports.update = (req, res) => {
    const sql = 'UPDATE unlikes SET checked = 1 WHERE id = ?';

    const id = req.body.id;

    conn.query(sql, [id], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}