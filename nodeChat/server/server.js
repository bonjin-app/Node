// create express instance
const express = require('express')
const app = express();

// create http instance
const http = require('http').Server(app)

// create socket io instance
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    console.log("User Connected", socket.id)
})

// start the server
http.listen(3000, () => {
    console.log('Server started')
})
