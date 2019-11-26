const nodemailer = require('nodemailer');

const conn = require('../config/db');

module.exports.signup = (req, res) => {
    const sql_select_verifies = 'SELECT id FROM verifies AS v LEFT JOIN users AS u ON v.user_id = u.id WHERE u.email = ? AND uuid = ?';
    const sql_delete_verifies = 'DELETE FROM verifies AS v LEFT JOIN users AS u ON v.user_id = u.id WHERE u.email = ? AND uuid = ?';
    const sql_update_users = 'UPDATE users SET verify = 1 WHERE email = ?';

    const email = req.query.email;
    const code = req.query.code;

    conn.query(sql_select_verifies, [email, code], (err, results) => {
        if (err) {
            console.log(err);
        } else if (results.length !== 0) {
            conn.query(sql_delete_verifies, [email, code], (err) => {
                if (err) {
                    console.log(err);
                }
            })
            conn.query(sql_update_users, [email], (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
}

module.exports.resend = (req, res) => {
    const sql = 'SELECT uuid FROM verifies WHERE user_id = ?';

    const email = req.body.email;

    conn.query(sql, [email], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));

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
                html: "<a href=" + URL + "/api/verifies/signup?email=" + email + "&code=" + results.uuid + ">Click here to verify !</a>"
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                }
            });
        }
    })
}