const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./route/users');
const appears = require('./route/appears');
const blocks = require('./route/blocks');
const likes = require('./route/likes');
const logs = require('./route/logs');
const messages = require('./route/messages');
const reports = require('./route/reports');
const tags = require('./route/tags');
const unlikes = require('./route/unlikes');
const usersAndTags = require('./route/usersAndTags');
const verifies = require('./route/verifies');
const visits = require('./route/visits');

// 

app.use(session({
    secret: '#@#42MATCHA#@#',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));

app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '4mb'
    })
)

app.use(bodyParser.json({
    limit: '4mb',
}));

app.use(cors({origin: 'https://localhost:3000'}));

app.get('/', (req, res) => {
    res.send('Connection is successful');
});

// 

app.get('/api/users', users.select);
app.get('/api/users/check', users.check);
app.get('/api/users/emailCheck', users.emailCheck);
app.get('/api/verifies/signup', verifies.signup);
app.get('/api/verifies/resend', verifies.resend);
app.get('/api/users/signin', users.signin);
app.get('/api/users/logout', users.logout);
app.get('/api/users/forgot', users.forgot);
app.post('/api/users/signup', users.signup);
app.put('/api/users', users.update);
app.put('/api/users/updateEmail', users.updateEmail);
app.put('/api/users/updatePassword', users.updatePassword);
app.put('/api/users/updatePicture', users.updatePicture);

app.post('/api/appears/insert', appears.insert);
app.post('/api/blocks/insert', blocks.insert);
app.post('/api/likes/insert', likes.insert);
app.post('/api/logs/insert', logs.insert);
app.post('/api/messages/insert', messages.insert);
app.post('/api/reports/insert', reports.insert);
app.post('/api/tags/insert', tags.insert);
app.post('/api/unlikes/insert', unlikes.insert);
app.post('/api/usersAndTags/insert', usersAndTags.insert);
// app.post('/api/verifies/insert', verifies.insert);
app.post('/api/visits/insert', visits.insert);

// 

app.listen(8443, () => console.log('server is running !'));