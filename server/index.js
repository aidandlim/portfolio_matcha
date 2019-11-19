const express = require('express');
const app = express();

const user = require('./route/user');
const message = require('./route/message');

app.get('/api/user/select', user.select);
app.get('/api/user/update', user.update);
app.get('/api/message/insert', message.insert);

app.listen(8080, () => console.log('server is running !'));