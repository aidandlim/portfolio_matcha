const conn = require('../config/db');

module.exports.insert = (req, res) => {
    let sql = 'INSERT INTO reports (from, to, reason) values (?, ?, ?)';

    let user = req.body.user;

    conn.query(sql, [], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            res.json(results);
        }
    })
}