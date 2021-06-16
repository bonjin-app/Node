// create express instance
const express = require('express')
const app = express();

// create http instance
const http = require('http').Server(app)

// create socket io instance
const io = require('socket.io')(http)

// start the server
http.listen(3000, () => {
    console.log('Server started')
})
