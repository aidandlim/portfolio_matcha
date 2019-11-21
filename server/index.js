const express = require('express');
const session = require('express-session');
const app = express();
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

const URL = 'https://127.0.0.1:8080'

// 

app.use(session({
    secret: '#@#42MATCHA#@#',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));

app.use(cors({origin: 'https://127.0.0.1:3000'}));

app.get('/', (req, res) => {
    res.send('Connection is successful');
});

// 

app.get('/api/users/check', users.check);
app.post('/api/users/signup', users.insert);

app.post('/api/appears/insert', appears.insert);
app.post('/api/blocks/insert', blocks.insert);
app.post('/api/likes/insert', likes.insert);
app.post('/api/logs/insert', logs.insert);
app.post('/api/messages/insert', messages.insert);
app.post('/api/reports/insert', reports.insert);
app.post('/api/tags/insert', tags.insert);
app.post('/api/unlikes/insert', unlikes.insert);
app.post('/api/usersAndTags/insert', usersAndTags.insert);
app.post('/api/verifies/insert', verifies.insert);
app.post('/api/visits/insert', visits.insert);

// 

app.listen(8080, () => console.log('server is running !'));