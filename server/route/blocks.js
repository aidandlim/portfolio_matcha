const conn = require('../config/db');

module.exports.select = (req, res) => {
    const sql = 'SELECT `to` FROM blocks WHERE `from` = ?';

    const userId = req.session.userId;

    conn.query(sql, [userId], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            let temp = [];

            results = JSON.parse(JSON.stringify(results));
            for (let i = 0; i < results.length; i++) {
                results[i] = Object.values(results[i]);
            } for (let i = 0; i < results.length; i++) {
                temp = temp.concat(results[i]);
            }
            res.json(temp);
        }
    })
}

//

module.exports.insert = (req, res) => {
    const sql = 'INSERT INTO blocks (`from`, `to`) values (?, ?)';

    const userId = req.session.userId;
    const to = req.body.to;

    conn.query(sql, [userId, to], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.delete = (req, res) => {
    const sql = 'DELETE FROM blocks WHERE `from` = ? AND `to` = ?';

    const userId = req.session.userId;
    const to = req.body.id;

    conn.query(sql, [userId, to], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}