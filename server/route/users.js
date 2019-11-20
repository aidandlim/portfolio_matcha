const conn = require('../config/db');

module.exports.check = (req, res) => {
    if(req.session.userId === undefined) {
        res.json(false);
    } else {
        res.json(req.session.userId);
    }
}

module.exports.insert = (req, res) => {
    let sql = 'INSERT INTO users (email, password, first_name, last_name, birth_year, gender, preference, address, latitude, longitude, bio, picture1, picture2, picture3, picture4, picture5, oAuth) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    let user = req.body.user;

    conn.query(sql, [user.email, user.password, user.first_name, user.last_name, user.birth_year, user.gender, user.preference, user.address, user.latitude, user.longitude, user.bio, user.picture1, user.picture2, user.picture3, user.picture4, user.picture5, user.oAuth], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            res.json(results);
        }
    })
}

module.exports.update = (req, res) => {
    res.json('here is update user');
}

//

module.exports.select = (req, res) => {
    res.json('here is select user');
}