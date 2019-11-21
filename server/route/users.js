const nodemailer = require('nodemailer');
const uuid = require('uuidv4');

const conn = require('../config/db');
const URL = require('../const');

module.exports.check = (req, res) => {
    if(req.session.userId === undefined) {
        res.json(false);
    } else {
        res.json(req.session.userId);
    }
}

module.exports.signup = (req, res) => {
    let sql_select_users = 'SELECT * id FROM users WHERE email = ?';
    let sql_insert_users = 'INSERT INTO users (email, password, first_name, last_name, birth_year, gender, preference, bio) values (?, SHA1(?), ?, ?, ?, ?, ?, ?)';
    let sql_insert_verifies = 'INSERT INTO verifies (user_id, uuid) values (?, ?)';

    let data = req.body.data;
    let code = uuid();

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

            conn.query(sql_insert_verifies, [유저_이메일의_아이디, code], (err) => {
                if (err) {
                    console.log(err);
                }
            })
            conn.query(sql_insert_users, [data.email, data.password, data.first_name, data.last_name, data.birth_year, data.gender, data.preference, data.bio], (err, results) => {
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

module.exports.update = (req, res) => {
    res.json('here is update user');
}

//

module.exports.select = (req, res) => {
    res.json('here is select user');
}