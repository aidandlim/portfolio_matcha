const conn = require('../config/db');

module.exports.select = (req, res) => {
    const sql = 'SELECT * FROM tags WHERE tag LIKE \'%?%\'';

    const tag = req.body.tag;

    conn.query(sql, [tag], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            res.json(results);
        }
    })
}

//

module.exports.insert = (req, res) => {
    const sql = 'INSERT INTO tags (tag) values (?)';

    const tag = req.body.tag;

    conn.query(sql, [tag], (err, results) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.linkInsert = (req, res) => {
    const sql = 'INSERT INTO users_and_tags (user_id, tag_id, type) values ((SELECT id FROM users WHERE email = ?), (SELECT id FROM tags WHERE tag = ?), ?)';

    const email = req.session.user;
    const tag = req.body.tag;
    const type = req.body.type;

    conn.query(sql, [email, tag, type], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.linkDelete = (req, res) => {
    const sql = 'DELETE FROM users_and_tags WHERE id = ?';

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