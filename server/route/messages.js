const conn = require('../config/db');

module.exports.select = (req, res) => {
    const sql_select_all = 'SELECT content AS messages, DATE_FORMAT(time, "%Y-%m-%d %k:%i:%s") AS time , direction FROM (SELECT content, time, 1 AS direction FROM messages WHERE `from` = ? AND `to` = ? UNION SELECT content, time, 0 AS direction FROM messages WHERE `to` = ? AND `from` = ?) results ORDER BY time';
    const sql_select_new = 'SELECT content AS messages, DATE_FORMAT(time, "%Y-%m-%d %k:%i:%s") AS time , direction FROM (SELECT content, time, 1 AS direction FROM messages WHERE `from` = ? AND `to` = ? AND checked = 1 UNION SELECT content, time, 0 AS direction FROM messages WHERE `to` = ? AND `from` = ? AND checked = 1) results ORDER BY time';

    const userId = req.session.userId;
    const data = req.query;

    if (data.type === 'all') {
        conn.query(sql_select_all, [userId, data.target, userId, data.target], (err, results) => {
            if (err) {
                console.log(err);
            } else {
                results = JSON.parse(JSON.stringify(results));
                res.json(results);
            }
        })
    } else if (data.type === 'new') {
        conn.query(sql_select_new, [userId, data.target, userId, data.target], (err, results) => {
            if (err) {
                console.log(err);
            } else {
                results = JSON.parse(JSON.stringify(results));
                res.json(results);
            }
        })
    }
}