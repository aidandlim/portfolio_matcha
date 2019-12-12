const nodemailer = require('nodemailer');
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '../public/images/');
const conn = require('../config/db');
const URL = require('../const');

//

module.exports.select = (req, res) => {
    const userId = parseInt(req.query.userId) === -1 ? req.session.userId : parseInt(req.query.userId);
    const distance = req.query.distance;

    if (distance === undefined) {
        const sql = 'SELECT id, email, last_name, first_name, birth_year, gender, preference_gender, preference_min_age, preference_max_age, preference_max_distance, address, latitude, longitude, bio, picture1, picture2, picture3, picture4, picture5, notification FROM users WHERE id = ?';

        conn.query(sql, [userId], (err, results) => {
            if (err) {
                console.log(err);
            } else {
                results = JSON.parse(JSON.stringify(results));
                res.json(results);
            }
        })
    } else {
        const sql_select_user = 'SELECT latitude, longitude FROM users WHERE id = ?';
        const sql_select_target = 'SELECT id, last_name, first_name, picture1, latitude, longitude, (6371*acos(cos(radians(?))*cos(radians(latitude))*cos(radians(longitude)-radians(?))+sin(radians(?))*sin(radians(latitude)))) AS distance FROM users WHERE id != ? HAVING distance <= (? * 0.625) ORDER BY distance';

        const user_Id = req.session.userId;
        
        conn.query(sql_select_user, [user_Id], (err, results) => {
            if (err) {
                console.log(err);
            } else {
                results = JSON.parse(JSON.stringify(results));

                conn.query(sql_select_target, [results[0].latitude, results[0].longitude, results[0].latitude, userId, distance], (err, results) => {
                    if (err) {
                        console.log(err);
                    } else {
                        results = JSON.parse(JSON.stringify(results));
                        res.json(results);
                    }
                })
            }
        })
    }
}

//

module.exports.update = (req, res) => {
    const sql = 'UPDATE users SET first_name = ?, last_name = ?, birth_year = ?, gender = ?, preference = ? WHERE id = ?';

    const userId = req.session.userId;
    const data = req.body;

    if (userId === -1) {
        res.json(0);
    } else {
        conn.query(sql, [data.first_name, data.last_name, data.birth_year, data.gender, data.preference, userId], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                res.json(1);
            }
        })
    }
}

//

module.exports.delete = (req, res) => {
    const sql = 'DELETE FROM users WHERE id = ?';

    const userId = req.session.userId;

    conn.query(sql, [userId], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            req.session.userId = -1;
            res.json(1);
        }
    })
}

//

module.exports.updateEmail = (req, res) => {
    const sql_update_email = 'UPDATE users SET email = ?, verify = 0 WHERE id = ?';
    const sql_insert_verifies = 'INSERT INTO verifies (user_id, uuid) values (?, ?)';

    const userId = req.session.userId;
    const newEmail = req.body.email;
    const code = uuid();

    if (userId === -1) {
        res.json(0);
    } else {
        conn.query(sql_update_email, [newEmail, userId], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: '42sv.matcha@gmail.com',
                        pass: 'gusdk314'
                    }
                });
                const mailOptions = {
                    from: '42sv.matcha@gmail.com',
                    to: newEmail,
                    subject: 'Please confirm for Matcha registration :)',
                    html: "<a href=" + URL + "/api/verifies/signup?email=" + newEmail + "&code=" + code + ">Click here to verify !</a>"
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    }
                });
    
                conn.query(sql_insert_verifies, [userId, code], (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                req.session.userId = -1;
                res.json(1);
            }
        })
    }
}

//

module.exports.updatePassword = (req, res) => {
    const sql = 'UPDATE users SET password = SHA1(?) WHERE id = ?';

    const userId = req.session.userId;
    const password = req.body.password;

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql, [password, userId], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                req.session.userId = -1;
                res.json(1);
            }
        })
    }
}

//


module.exports.updatePicture = (req, res) => {
    const sql = 'UPDATE users SET picture' + req.body.index + ' = ? WHERE id = ?';

    const userId = req.session.userId;
    let picture = req.body.picture;

    if(picture !== '') {
        let extension = '';
        if(picture.match(/data:image\/jpeg;base64,/)) {
            extension = '.jpeg';
        } else if(picture.match(/data:image\/jpg;base64,/)) {
            extension = '.jpg';
        } else if(picture.match(/data:image\/png;base64,/)) {
            extension = '.png';
        }

        picture = picture.replace('data:image/jpeg;base64,', '')
                        .replace('data:image/jpg;base64,', '')
                        .replace('data:image/png;base64,', '');

        const code = uuid();

        if (userId === -1) {
            res.json(0);
        } else {
            fs.writeFileSync(imagePath + code + extension, picture, {encoding: 'base64'}, function(err) {
                console.log('File created');
            });
            conn.query(sql, [code + extension, userId], (err) => {
                if (err) {
                    console.log(err);
                    res.json(0);
                } else {
                    res.json(code + extension);
                }
            })
        }
    } else {
        conn.query(sql, ['', userId], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                res.json('');
            }
        })
    }
}

//

module.exports.updateAddress = (req, res) => {
    const sql = 'UPDATE users SET address = ?, latitude = ?, longitude = ? WHERE id = ?';

    const userId = req.session.userId;
    const data = req.body;

    if (userId === -1) {
        res.json(0);
    } else {
        conn.query(sql, [data.address, data.latitude, data.longitude, userId], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                res.json(1);
            }
        })
    }
}

//

module.exports.updateBio = (req, res) => {
    const sql = 'UPDATE users SET bio = ? WHERE id = ?';

    const userId = req.session.userId;
    const bio = req.body.bio;

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql, [bio, userId], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                res.json(1);
            }
        })
    }
}

//

module.exports.updateNotification = (req, res) => {
    const sql = 'UPDATE users SET notification = if(notification = 1, 0, 1) WHERE id = ?';

    const userId = req.session.userId;

    conn.query(sql, [userId], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.filters = (req, res) => {
    const sql = 'UPDATE users SET preference_min_age = ?, preference_max_age = ?, preference_max_distance = ? WHERE id = ?';

    const data = req.body;
    const userId = req.session.userId;

    conn.query(sql, [data.preference_min_age, data.preference_max_age, data.preference_max_distance, userId], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}