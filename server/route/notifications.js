const conn = require('../config/db');

module.exports.select = (req, res) => {
    const sql = 'SELECT id, type, `from`, `to`, time, checked, first_name, last_name, picture, CASE WHEN MINUTE(TIMEDIFF(NOW(), time)) = 0 THEN \'RIGHT NOW\' WHEN time > DATE_ADD(NOW(), INTERVAL-1 HOUR) THEN CONCAT(MINUTE(TIMEDIFF(NOW(), time)), \' MINUTES AGO\') WHEN time > DATE_ADD(NOW(), INTERVAL-24 HOUR) THEN CONCAT(HOUR(TIMEDIFF(NOW(), time)), \' HOURS AGO\') ELSE CONCAT(DATEDIFF(NOW(), time), \' DAYS AGO\') END as time FROM (SELECT appears.id as id, \'appears\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked, first_name as first_name, last_name as last_name, users.picture1 as picture FROM appears LEFT JOIN users ON appears.from = users.id WHERE `to` = (SELECT id FROM users WHERE email = ?) UNION SELECT visits.id as id, \'visits\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked, first_name as first_name, last_name as last_name, users.picture1 as picture FROM visits LEFT JOIN users ON visits.from = users.id WHERE `to` = (SELECT id FROM users WHERE email = ?) UNION SELECT likes.id as id, \'likes\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked, first_name as first_name, last_name as last_name, users.picture1 as picture FROM likes LEFT JOIN users ON likes.from = users.id WHERE `to` = (SELECT id FROM users WHERE email = ?) UNION SELECT unlikes.id as id, \'unlikes\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked, first_name as first_name, last_name as last_name, users.picture1 as picture FROM unlikes LEFT JOIN users ON unlikes.from = users.id WHERE `to` = (SELECT id FROM users WHERE email = ?)) results ORDER BY time asc';

    const email = req.session.user;

    conn.query(sql, [email, email, email, email], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            res.json(results);
        }
    })
}