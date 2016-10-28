var express = require('express');
var path = require('path');
var app = express();


app.use('/',express.static(path.join(__dirname, '../client')));
app.use('/api',require('./routes/api'));
var server = app.listen(3000);
var io = require('socket.io')(server);
require('./live/polls')(io);