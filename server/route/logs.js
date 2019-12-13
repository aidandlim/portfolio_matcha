const conn = require('../config/db');

module.exports.select = (req, res) => {
    let sql = 'SELECT DATE_FORMAT(time, "%Y-%m-%d %k:%i") FROM logs WHERE user_id = ? ORDER BY time DESC LIMIT 10;';

    let userId = req.session.userId;

    conn.query(sql, [userId], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            res.json(results);
        }
    })
}