const nodemailer = require('nodemailer');
const uuid = require('uuid/v1');

const conn = require('../config/db');
const URL = require('../const');

//

module.exports.select = (req, res) => {
    const email = req.query.email === undefined ? req.session.user : req.query.email;
    // const distance = req.query.distance;

    // if (distance === null) {
        const sql = 'SELECT * FROM users WHERE email = ?';

        conn.query(sql, [email], (err, results) => {
            if (err) {
                console.log(err);
            } else {
                if (results.length !== 0) { 
                    results = JSON.parse(JSON.stringify(results));
                    res.json(results);
                } else {
                    res.json(undefined);
                }
            }
        })
    // }
    //  else {
    //     const sql = 'SELECT * FROM users WHERE email = ?';
        
    //     conn.query(sql, [email], (err, results) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             if (results.length !== 0) { 
    //                 results = JSON.parse(JSON.stringify(results));
    //                 res.json(results);
    //             } else {
    //                 res.json(undefined);
    //             }
    //         }
    //     })
    // }
}

//

module.exports.emailCheck = (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ?';

    const email = req.query.email;

    conn.query(sql, [email], (err, results) => {
        if (err) {
            console.log(err);
        } else if (results.length === 0) {
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.update = (req, res) => {
    const sql = 'UPDATE users SET first_name = ?, last_name = ?, birth_year = ?, gender = ?, preference = ? WHERE email = ?';

    const email = req.session.user;
    const data = req.body;

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql, [data.first_name, data.last_name, data.birth_year, data.gender, data.preference, email], (err) => {
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

module.exports.updateEmail = (req, res) => {
    const sql_update_email = 'UPDATE users SET email = ?, verify = 0 WHERE email = ?';
    const sql_insert_verifies = 'INSERT INTO verifies (user_id, uuid) values ((SELECT id FROM users WHERE email = ?), ?)';

    const email = req.session.user;
    const newEmail = req.body.email;
    const code = uuid();

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql_update_email, [newEmail, email], (err) => {
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
    
                conn.query(sql_insert_verifies, [newEmail, code], (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                res.json(1);
            }
        })
    }
}

//

module.exports.updatePassword = (req, res) => {
    const sql = 'UPDATE users SET password = SHA1(?) WHERE email = ?';

    const email = req.session.user;
    const password = req.body.password;

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql, [password, email], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                req.session.user = undefined;
                res.json(1);
            }
        })
    }
}

//

module.exports.updatePicture = (req, res) => {
    const sql = 'UPDATE users SET picture' + req.body.index + ' = ? WHERE email = ?';

    const email = req.session.user;
    const picture = req.body.picture;

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql, [picture, email], (err) => {
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

module.exports.updateAddress = (req, res) => {
    const sql = 'UPDATE users SET address = ?, latitude = ?, longitude = ? WHERE email = ?';

    const email = req.session.user;
    const data = req.body;

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql, [data.address, data.latitude, data.longitude, email], (err) => {
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
    const sql = 'UPDATE users SET bio = ? WHERE email = ?';

    const email = req.session.user;
    const bio = req.body.bio;

    if (email === undefined) {
        res.json(0);
    } else {
        conn.query(sql, [bio, email], (err) => {
            if (err) {
                console.log(err);
                res.json(0);
            } else {
                res.json(1);
            }
        })
    }
}