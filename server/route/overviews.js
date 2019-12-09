const conn = require('../config/db');

module.exports.select = (req, res) => {
	const sql = 'SELECT \'appears\' AS type, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 6 DAY) THEN 1 END) as date1, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 5 DAY) THEN 1 END) as date2, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 4 DAY) THEN 1 END) as date3, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 3 DAY) THEN 1 END) as date4, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 2 DAY) THEN 1 END) as date5, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 1 DAY) THEN 1 END) as date6, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 0 DAY) THEN 1 END) as date7 FROM appears WHERE `to` = (SELECT id FROM users WHERE email = ?) UNION SELECT \'visits\' AS type, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 6 DAY) THEN 1 END) as date1, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 5 DAY) THEN 1 END) as date2, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 4 DAY) THEN 1 END) as date3, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 3 DAY) THEN 1 END) as date4, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 2 DAY) THEN 1 END) as date5, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 1 DAY) THEN 1 END) as date6, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 0 DAY) THEN 1 END) as date7 FROM visits WHERE `to` = (SELECT id FROM users WHERE email = ?) UNION SELECT \'likes\' AS type, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 6 DAY) THEN 1 END) as date1, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 5 DAY) THEN 1 END) as date2, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 4 DAY) THEN 1 END) as date3, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 3 DAY) THEN 1 END) as date4, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 2 DAY) THEN 1 END) as date5, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 1 DAY) THEN 1 END) as date6, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 0 DAY) THEN 1 END) as date7 FROM likes WHERE `to` = (SELECT id FROM users WHERE email = ?) UNION SELECT \'unlikes\' AS type, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 6 DAY) THEN 1 END) as date1, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 5 DAY) THEN 1 END) as date2, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 4 DAY) THEN 1 END) as date3, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 3 DAY) THEN 1 END) as date4, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 2 DAY) THEN 1 END) as date5, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 1 DAY) THEN 1 END) as date6, count(CASE WHEN DATE(time) = (CURDATE() - INTERVAL 0 DAY) THEN 1 END) as date7 FROM unlikes WHERE `to` = (SELECT id FROM users WHERE email = ?)';

    const email = req.session.user;

    conn.query(sql, [email, email, email, email], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            console.log(results);
        }
    })
}

