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