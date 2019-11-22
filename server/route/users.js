const nodemailer = require('nodemailer');
const uuid = require('uuid/v1');

const conn = require('../config/db');
const URL = require('../const');

//

module.exports.check = (req, res) => {
    if(req.session.userId === undefined) {
        res.json(false);
    } else {
        res.json(req.session.userId);
    }
}

//

module.exports.signup = (req, res) => {
    const sql_select_users = 'SELECT id FROM users WHERE email = ?';
    const sql_insert_users = 'INSERT INTO users (email, password, first_name, last_name, birth_year, gender, preference, bio) values (?, SHA1(?), ?, ?, ?, ?, ?, ?)';
    const sql_insert_verifies = 'INSERT INTO verifies (user_id, uuid) values ((SELECT id FROM users WHERE email = ?), ?)';

    const data = req.body;
    console.log(req);
    const code = uuid();

    conn.query(sql_select_users, [data.email], (err, results) => {
        if (err) {
            console.log(err);
        } else if (results.length !== 0) {
            res.json('이메일이 중복됩니다');
        } else {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'helloWorld@gmail.com',
                    pass: '1234'
                }
            });
            const mailOptions = {
                from: 'helloWorld@gmail.com',
                to: data.email,
                subject: 'Please confirm for Matcha registration :)',
                html: "<a href=" + URL + "/api/verifies/signup?email=" + data.email + "&code=" + code + ">Click here to verify !</a>"
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                }
            });

            conn.query(sql_insert_users, [data.email, data.password, data.first_name, data.last_name, data.birth_year, data.gender, data.preference, data.bio], (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    conn.query(sql_insert_verifies, [data.email, code], (err) => {
                        if (err) {
                            console.log(err);
                        }
                    })
                    results = JSON.parse(JSON.stringify(results));
                    res.json(results);
                }
            })
        }
    })
}

//

module.exports.emailCheck = (req, res) => {
    
}

module.exports.signin = (req, res) => {
    const sql_select_email = 'SELECT * FROM users WHERE email = ?';
    const sql_select_password = 'SELECT verify FROM users WHERE email = ? AND password = SHA1(?)';

    const email = req.body.email;
    const password = req.body.password;

    conn.query(sql_select_email, [email], (err, results) => {
        if (err) {
            console.log(err);
        } else if (results.length === 0) {
            res.json(2); // Doesn't exist email
        } else {
            conn.query(sql_select_password, [email, password], (err, results) => {
                results = JSON.parse(JSON.stringify(results));
                if (err) {
                    console.log(err);
                } else if (results.length === 0) {
                    res.json(3); // Password is wrong
                } else if (results.verify === 0) {
                    res.json(4); // Verify is 0
                } else {
                    req.session.user = email;
                    res.json(1); // Log in successfully
                }
            })
        }
    })
}

//

module.exports.select = (req, res) => {
    res.json('here is select user');
}