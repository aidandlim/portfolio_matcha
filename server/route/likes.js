const conn = require('../config/db');

module.exports.select = (req, res) => {
    const sql_select_user = 'SELECT `from` as data FROM likes WHERE `to` = ?';
    const sql_select_other = 'SELECT `to` as data FROM likes WHERE `from` = ?';

    const userId = req.session.userId;
    let temp = {
        user: [],
        other: []
    };

    conn.query(sql_select_user, [userId], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            for (let i = 0; i < results.length; i++) {
                results[i] = Object.values(results[i]);
            } for (let i = 0; i < results.length; i++) {
                temp.user = temp.user.concat(results[i]);
            }

            conn.query(sql_select_other, [userId], (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    results = JSON.parse(JSON.stringify(results));
                    for (let i = 0; i < results.length; i++) {
                        results[i] = Object.values(results[i]);
                    } for (let i = 0; i < results.length; i++) {
                        temp.other = temp.other.concat(results[i]);
                    }
                    res.json(temp);
                }
            })
        }
    })        
}

module.exports.insert = (req, res) => {
    const sql = 'INSERT INTO likes (from, to) values (?, ?)';

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
    const sql = 'UPDATE likes SET checked = 1 WHERE id = ?';

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