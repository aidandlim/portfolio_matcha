const nodemailer = require('nodemailer');
const uuid = require('uuid/v1');

const conn = require('../config/db');

module.exports.forgot = (req, res) => {
    const sql = 'UPDATE users SET password = SHA1(?) WHERE email = ?';

    const email = req.query.email;
    const password = uuid();

    if (this.ft_emailCheck(email) === 0) {
        res.json(0);
    } else {
        conn.query(sql, [password, email], (err) => {
            if (err) {
                console.log(err);
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
                    to: email,
                    subject: 'Please confirm for Matcha account :)',
                    html: "<div>Your password is changed !<p>E-mail : " + email + "<p>Password : " + password + "<p>You can change your password after login.</div>"
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    }
                });
                res.json(1);
            }
        })
    }
}

//

module.exports.reverify = (req, res) => {
    const sql = 'SELECT uuid FROM verifies WHERE user_id = ?';

    const email = req.query.email;

    conn.query(sql, [email], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '42sv.matcha@gmail.com',
                    pass: 'gusdk314'
                }
            });
            const mailOptions = {
                from: '42sv.matcha@gmail.com',
                to: email,
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