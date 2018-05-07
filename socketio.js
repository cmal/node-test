var express = require('express')
var app = express();
app.use(express.static(__dirname));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// io.on('connection', function(){ /* … */ });

io.sockets.on('connection', socket => {
    let id = socket.id;

    socket.emit('broadcast', { message: 'Hi!' })
    socket.on('clientmessage', data => {
        console.log('Client said: ', JSON.stringify(data));
    })

    socket.on('mousemove', data => {
        data.id = id;
        socket.broadcast.emit('moving', data)
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('clientdisconnect', id)
    })
})
server.listen(8080);
