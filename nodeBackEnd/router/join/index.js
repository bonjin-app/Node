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
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var password = body.password;

    var query = connection.query(`insert into user(email, name, password) values('${email}', '${name}', '${password}')`, function(err, rows, fields) {
        if (err) throw err;
        console.log('ok db insert');
    });
    res.redirect('/join');
});

module.exports = router;