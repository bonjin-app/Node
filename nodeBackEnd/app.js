const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "gigas.synology.me",
    port: 3306,
    user: 'node',
    password: "1234",
    database: "node"
});
connection.connect();

app.listen(3000, () => {
    console.log('start! express server on port 3000');
});

// app.use('/public', express.static('public'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
//    res.send(`<h1>hello world</h1>`); 
    res.sendFile(__dirname+'/public/main.html');
});

app.get('/main', function(req, res) {
//    res.send(`<h1>hello world</h1>`); 
    res.sendFile(__dirname+'/public/main.html');
});

app.post('/email_post', function(req, res) {
    console.log(req.body);
    // res.send(`<h1>welcome ${req.body.email}</h1>`);
    res.render('email', {
        email: req.body.email
    });
})

app.post('/ajax_send_email', (req, res) => {
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