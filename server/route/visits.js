const conn = require('../config/db');

module.exports.insert = (req, res) => {
    const sql = 'INSERT INTO visits (from, to) values (?, ?)';

    const data = req.body;

    conn.query(sql, [data.from, data.to], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.update = (req, res) => {
    const sql = 'UPDATE visits SET checked = 1 WHERE id = ?';

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