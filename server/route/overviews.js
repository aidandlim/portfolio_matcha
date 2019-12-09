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

SELECT 'appears' AS type, '2019-12-02' AS date, count(*) as count FROM appears WHERE DATE(time) = '2019-12-02' AND `to` = 35
UNION
SELECT 'appears' AS type, '2019-12-03' AS date, count(*) as count FROM appears WHERE DATE(time) = '2019-12-03' AND `to` = 35
UNION
SELECT 'appears' AS type, '2019-12-04' AS date, count(*) as count FROM appears WHERE DATE(time) = '2019-12-04' AND `to` = 35
UNION
SELECT 'appears' AS type, '2019-12-05' AS date, count(*) as count FROM appears WHERE DATE(time) = '2019-12-05' AND `to` = 35
UNION
SELECT 'appears' AS type, '2019-12-06' AS date, count(*) as count FROM appears WHERE DATE(time) = '2019-12-06' AND `to` = 35
UNION
SELECT 'appears' AS type, '2019-12-07' AS date, count(*) as count FROM appears WHERE DATE(time) = '2019-12-07' AND `to` = 35
UNION
SELECT 'appears' AS type, '2019-12-08' AS date, count(*) as count FROM appears WHERE DATE(time) = '2019-12-08' AND `to` = 35

UNION

SELECT 'visits' AS type, '2019-12-02' AS date, count(*) as count FROM visits WHERE DATE(time) = '2019-12-02' AND `to` = 35
UNION
SELECT 'visits' AS type, '2019-12-03' AS date, count(*) as count FROM visits WHERE DATE(time) = '2019-12-03' AND `to` = 35
UNION
SELECT 'visits' AS type, '2019-12-04' AS date, count(*) as count FROM visits WHERE DATE(time) = '2019-12-04' AND `to` = 35
UNION
SELECT 'visits' AS type, '2019-12-05' AS date, count(*) as count FROM visits WHERE DATE(time) = '2019-12-05' AND `to` = 35
UNION
SELECT 'visits' AS type, '2019-12-06' AS date, count(*) as count FROM visits WHERE DATE(time) = '2019-12-06' AND `to` = 35
UNION
SELECT 'visits' AS type, '2019-12-07' AS date, count(*) as count FROM visits WHERE DATE(time) = '2019-12-07' AND `to` = 35
UNION
SELECT 'visits' AS type, '2019-12-08' AS date, count(*) as count FROM visits WHERE DATE(time) = '2019-12-08' AND `to` = 35

UNION

SELECT 'likes' AS type, '2019-12-02' AS date, count(*) as count FROM likes WHERE DATE(time) = '2019-12-02' AND `to` = 35
UNION
SELECT 'likes' AS type, '2019-12-03' AS date, count(*) as count FROM likes WHERE DATE(time) = '2019-12-03' AND `to` = 35
UNION
SELECT 'likes' AS type, '2019-12-04' AS date, count(*) as count FROM likes WHERE DATE(time) = '2019-12-04' AND `to` = 35
UNION
SELECT 'likes' AS type, '2019-12-05' AS date, count(*) as count FROM likes WHERE DATE(time) = '2019-12-05' AND `to` = 35
UNION
SELECT 'likes' AS type, '2019-12-06' AS date, count(*) as count FROM likes WHERE DATE(time) = '2019-12-06' AND `to` = 35
UNION
SELECT 'likes' AS type, '2019-12-07' AS date, count(*) as count FROM likes WHERE DATE(time) = '2019-12-07' AND `to` = 35
UNION
SELECT 'likes' AS type, '2019-12-08' AS date, count(*) as count FROM likes WHERE DATE(time) = '2019-12-08' AND `to` = 35

UNION

SELECT 'unlikes' AS type, '2019-12-02' AS date, count(*) as count FROM unlikes WHERE DATE(time) = '2019-12-02' AND `to` = 35
UNION
SELECT 'unlikes' AS type, '2019-12-03' AS date, count(*) as count FROM unlikes WHERE DATE(time) = '2019-12-03' AND `to` = 35
UNION
SELECT 'unlikes' AS type, '2019-12-04' AS date, count(*) as count FROM unlikes WHERE DATE(time) = '2019-12-04' AND `to` = 35
UNION
SELECT 'unlikes' AS type, '2019-12-05' AS date, count(*) as count FROM unlikes WHERE DATE(time) = '2019-12-05' AND `to` = 35
UNION
SELECT 'unlikes' AS type, '2019-12-06' AS date, count(*) as count FROM unlikes WHERE DATE(time) = '2019-12-06' AND `to` = 35
UNION
SELECT 'unlikes' AS type, '2019-12-07' AS date, count(*) as count FROM unlikes WHERE DATE(time) = '2019-12-07' AND `to` = 35
UNION
SELECT 'unlikes' AS type, '2019-12-08' AS date, count(*) as count FROM unlikes WHERE DATE(time) = '2019-12-08' AND `to` = 35

*/