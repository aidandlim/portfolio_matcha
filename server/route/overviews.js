const conn = require('../config/db');

module.exports.select = (req, res) => {
    const sql_count_appears = 'SELECT COUNT(*) as appears FROM appears WHERE time > SUBDATE(NOW(), INTERVAL 7 DAY) GROUP BY DAY(time) AND `to` = (SELECT id FROM users WHERE email = ?)';
    const sql_count_visits = 'SELECT COUNT(*) as visits FROM visits WHERE time > SUBDATE(NOW(), INTERVAL 7 DAY) GROUP BY DAY(time) AND `to` = (SELECT id FROM users WHERE email = ?)';
    const sql_count_likes = 'SELECT COUNT(*) as likes FROM likes WHERE time > SUBDATE(NOW(), INTERVAL 7 DAY) GROUP BY DAY(time) AND `to` = (SELECT id FROM users WHERE email = ?)';
    const sql_count_unlikes = 'SELECT COUNT(*) as unlikes FROM unlikes WHERE time > SUBDATE(NOW(), INTERVAL 7 DAY) GROUP BY DAY(time) AND `to` = (SELECT id FROM users WHERE email = ?)';

    // const email = req.session.user;
    // const temp = {
    //     appears: [],
    //     visits: [],
    //     likes: [],
    //     unlikes: []
    // };

    const email = 'aidandlim@gmail.com';

    conn.query(sql_count_appears, [email], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            console.log(results);
        }
    })


}

/*

SELECT 
	'appears' AS type,
	count(CASE WHEN DATE(time) = '2019-12-03' THEN 1 END) as date1,
	count(CASE WHEN DATE(time) = '2019-12-04' THEN 1 END) as date2,
	count(CASE WHEN DATE(time) = '2019-12-05' THEN 1 END) as date3,
	count(CASE WHEN DATE(time) = '2019-12-06' THEN 1 END) as date4,
	count(CASE WHEN DATE(time) = '2019-12-07' THEN 1 END) as date5,
	count(CASE WHEN DATE(time) = '2019-12-08' THEN 1 END) as date6,
	count(CASE WHEN DATE(time) = '2019-12-09' THEN 1 END) as date7
FROM appears 
WHERE `to` = 35

UNION

SELECT 
	'visits' AS type,
	count(CASE WHEN DATE(time) = '2019-12-03' THEN 1 END) as date1,
	count(CASE WHEN DATE(time) = '2019-12-04' THEN 1 END) as date2,
	count(CASE WHEN DATE(time) = '2019-12-05' THEN 1 END) as date3,
	count(CASE WHEN DATE(time) = '2019-12-06' THEN 1 END) as date4,
	count(CASE WHEN DATE(time) = '2019-12-07' THEN 1 END) as date5,
	count(CASE WHEN DATE(time) = '2019-12-08' THEN 1 END) as date6,
	count(CASE WHEN DATE(time) = '2019-12-09' THEN 1 END) as date7
FROM visits 
WHERE `to` = 35

UNION

SELECT 
	'likes' AS type,
	count(CASE WHEN DATE(time) = '2019-12-03' THEN 1 END) as date1,
	count(CASE WHEN DATE(time) = '2019-12-04' THEN 1 END) as date2,
	count(CASE WHEN DATE(time) = '2019-12-05' THEN 1 END) as date3,
	count(CASE WHEN DATE(time) = '2019-12-06' THEN 1 END) as date4,
	count(CASE WHEN DATE(time) = '2019-12-07' THEN 1 END) as date5,
	count(CASE WHEN DATE(time) = '2019-12-08' THEN 1 END) as date6,
	count(CASE WHEN DATE(time) = '2019-12-09' THEN 1 END) as date7
FROM likes 
WHERE `to` = 35

UNION

SELECT 
	'unlikes' AS type,
	count(CASE WHEN DATE(time) = '2019-12-03' THEN 1 END) as date1,
	count(CASE WHEN DATE(time) = '2019-12-04' THEN 1 END) as date2,
	count(CASE WHEN DATE(time) = '2019-12-05' THEN 1 END) as date3,
	count(CASE WHEN DATE(time) = '2019-12-06' THEN 1 END) as date4,
	count(CASE WHEN DATE(time) = '2019-12-07' THEN 1 END) as date5,
	count(CASE WHEN DATE(time) = '2019-12-08' THEN 1 END) as date6,
	count(CASE WHEN DATE(time) = '2019-12-09' THEN 1 END) as date7
FROM unlikes 
WHERE `to` = 35


*/