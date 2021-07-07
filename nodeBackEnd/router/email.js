const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "gigas.synology.me",
    port: 3306,
    user: 'node',
    password: "1234",
    database: "node"
});
connection.connect();

router.post('/form', function(req, res) {
    console.log(req.body);
    // res.send(`<h1>welcome ${req.body.email}</h1>`);
    res.render('email', {
        email: req.body.email
    });
})

router.post('/ajax', (req, res) => {
    console.log(req.body.email);

    // check validation
    var email = req.body.email;
    var responseData = {};

    var query = connection.query(`select name from user where email = '${email}'`, function(err, rows, fields) {
        if (err) throw err;
        if (rows[0]) {
            console.log(rows[0]);
            responseData.result = "ok";
            responseData.name = rows[0].name;
        } else {
            console.log(`none: ${rows[0]}`)
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData);
    });
});

module.exports = router;