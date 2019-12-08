const conn = require('../config/db');

module.exports.select = (req, res) => {
    const sql = 'SELECT id, type, `from`, `to`, time, checked, CASE WHEN MINUTE(TIMEDIFF(NOW(), time)) = 0 THEN \'RIGHT NOW\' WHEN time > DATE_ADD(NOW(), INTERVAL-1 HOUR) THEN CONCAT(MINUTE(TIMEDIFF(NOW(), time)), \' MINUTES AGO\') WHEN time > DATE_ADD(NOW(), INTERVAL-24 HOUR) THEN CONCAT(HOUR(TIMEDIFF(NOW(), time)), \' HOURS AGO\') ELSE CONCAT(DATEDIFF(NOW(), time), \' DAYS AGO\') END as time FROM (SELECT id as id, \'appears\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked FROM appears UNION SELECT id as id, \'visits\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked FROM visits UNION SELECT id as id, \'likes\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked FROM likes UNION SELECT id as id, \'unlikes\' as type, `from` as `from`, `to` as `to`, time as time, checked as checked FROM unlikes) results ORDER BY time desc';

    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            res.json(results);
        }
    })
}