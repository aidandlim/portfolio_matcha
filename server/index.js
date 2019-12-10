const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./route/users');
const auth = require('./route/auth');
const mail = require('./route/mail');
const appears = require('./route/appears');
const blocks = require('./route/blocks');
const likes = require('./route/likes');
const logs = require('./route/logs');
const messages = require('./route/messages');
const reports = require('./route/reports');
const tags = require('./route/tags');
const unlikes = require('./route/unlikes');
const verifies = require('./route/verifies');
const visits = require('./route/visits');
const notifications = require('./route/notifications');
const overviews = require('./route/overviews');

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
        limit: '50mb'
    })
)

app.use(bodyParser.json({
    limit: '50mb',
}));

app.use(express.static('public'));

app.use(cors({origin: 'https://localhost:3000'}));

app.get('/', (req, res) => {
    res.send('Connection is successful');
});

// 

app.get('/api/users', users.select);
app.put('/api/users', users.update);
app.put('/api/users/email', users.updateEmail);
app.put('/api/users/password', users.updatePassword);
app.put('/api/users/picture', users.updatePicture);
app.put('/api/users/address', users.updateAddress);
app.put('/api/users/bio', users.updateBio);

app.get('/api/verifies/up', verifies.up);

app.get('/api/mail/password', mail.forgot);
app.get('/api/mail/reverify', mail.reverify);

app.get('/api/auth/in', auth.in);
app.get('/api/auth/out', auth.out);
app.post('/api/auth/up', auth.up);

app.get('/api/tags', tags.select);
app.post('/api/tags', tags.insert);
app.delete('/api/tags', tags.delete);

app.put('/api/appears', appears.update);
app.post('/api/appears', appears.insert);

app.put('/api/visits', visits.update);
app.post('/api/visits', visits.insert);

app.get('/api/likes', likes.select);
app.put('/api/likes', likes.update);
app.post('/api/likes', likes.insert);

app.put('/api/unlikes', unlikes.update);
app.post('/api/unlikes', unlikes.insert);

app.get('/api/notifications', notifications.select);

app.get('/api/overviews', overviews.select);



app.post('/api/blocks/insert', blocks.insert);
app.post('/api/logs/insert', logs.insert);
app.post('/api/messages/insert', messages.insert);
app.post('/api/reports/insert', reports.insert);

// 

app.listen(8443, () => console.log('server is running !'));