const express = require('express');
const router = express.Router();
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "gigas.synology.me",
    port: 3306,
    user: 'node',
    password: "1234",
    database: "node"
});
connection.connect();

router.get('/', function(req, res) {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../../public/join.html'));
});

router.post('/', function(req, res) {
    res.send('join post');
});

module.exports = router;