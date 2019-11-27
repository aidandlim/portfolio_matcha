const nodemailer = require('nodemailer');
const uuid = require('uuid/v1');

const conn = require('../config/db');
const URL = require('../const');

//

module.exports.check = (req, res) => {
    if(req.session.user === undefined) {
        res.json(undefined);
    } else {
        res.json(req.session.user);
    }
}

//

module.exports.select = (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ?';

    const email = req.session.user;

    conn.query(sql, [email], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            results = JSON.parse(JSON.stringify(results));
            res.json(results);            
        }
    })
}

//

module.exports.emailCheck = (req, res) => {
    const email = req.body.email;

    if (this.ft_emailCheck(email) === 0) {
        res.json(0);
    } else {
        res.json(1);
    }
}

//

module.exports.ft_emailCheck = (email) => {
    const sql = 'SELECT id FROM users WHERE email = ?';

    conn.query(sql, [email], (err, results) => {
        if (err) {
            console.log(err);
        } else if (results.length === 0) {
            return (0);
        } else {
            return (1);
        }
    })
}

//

module.exports.signup = (req, res) => {
    const sql_insert_users = 'INSERT INTO users (email, password, first_name, last_name, birth_year, gender, preference, bio) values (?, SHA1(?), ?, ?, ?, ?, ?, ?)';
    const sql_insert_verifies = 'INSERT INTO verifies (user_id, uuid) values ((SELECT id FROM users WHERE email = ?), ?)';

    const data = req.body;
    const code = uuid();

    if (this.ft_emailCheck(data.email) === 0) {
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

        conn.query(sql_insert_users, [data.email, data.password, data.first_name, data.last_name, data.birth_year, data.gender, data.preference, data.bio], (err) => {
            if (err) {
                console.log(err);
            } else {
                conn.query(sql_insert_verifies, [data.email, code], (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                res.json(1);
            }
        })
    } else {
        res.json(0);
    }
}

//

module.exports.signin = (req, res) => {
    const sql = 'SELECT verify FROM users WHERE email = ? AND password = SHA1(?)';

    const email = req.body.email;
    const password = req.body.password;

    if (this.ft_emailCheck(email) === 0) {
        res.json(2); // Doesn't exist email
    } else {
        conn.query(sql, [email, password], (err, results) => {
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
}

//

module.exports.logout = (req, res) => {
    if (req.session.user !== undefined) {
        req.session.user = undefined;
        res.json(1);
    } else {
        res.json(0);
    }
}

//

module.exports.forgot = (req, res) => {
    const sql = 'UPDATE users SET password = SHA1(?) WHERE email = ?';

    const email = req.body.email;
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
                        user: 'helloWorld@gmail.com',
                        pass: '1234'
                    }
                });
                const mailOptions = {
                    from: 'helloWorld@gmail.com',
                    to: data.email,
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

module.exports.update = (req, res) => {
    const sql = 'UPDATE users SET first_name = ?, last_name = ?, birth_year = ?, gender = ?, preference = ?, bio = ?';

    const data = req.body;

    conn.query(sql, [data.first_name, data.last_name, data.birth_year, data.gender, data.preference, data.bio], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.updateEmail = (req, res) => {
    const sql_update_email = 'UPDATE users SET email = ?, verify = 0 WHERE email = ?';
    const sql_insert_verifies = 'INSERT INTO verifies (user_id, uuid) values ((SELECT id FROM users WHERE email = ?), ?)';

    const email = req.session.user;
    const newEmail = req.body.email;
    const code = uuid();

    conn.query(sql_update_email, [newEmail, email], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
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

//

module.exports.updatePassword = (req, res) => {
    const sql = 'UPDATE users SET password = ? WHERE email = ?';

    const email = req.session.user;
    const password = req.body.password;

    conn.query(sql, [password, email], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}

//

module.exports.updatePicture = (req, res) => {
    const sql = 'UPDATE users SET picture' + req.body.index + ' = ? WHERE email = ?';

    const email = req.session.user;
    const picture = req.body.picture;

    conn.query(sql, [picture, email], (err) => {
        if (err) {
            console.log(err);
            res.json(0);
        } else {
            res.json(1);
        }
    })
}