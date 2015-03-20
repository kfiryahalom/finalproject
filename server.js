/**
 * Created by yotam on 3/20/2015.
 */

var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketio(server);

app.get('/', function (req, res) {
    res.end('hello');
})

io.on('connection', function(socket){
   console.log('a user connected');
});

server.listen(3000, function(){
   console.log('listening on port 3000');
});