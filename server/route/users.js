const session = require('express-session');

module.exports.check = (req, res) => {
    if(req.session.userId === undefined) {
        res.json(false);
    } else {
        res.json(req.session.userId);
    }
}

//

module.exports.select = (req, res) => {
    res.json('here is select user');
}

module.exports.update = (req, res) => {
    res.json('here is update user');
}