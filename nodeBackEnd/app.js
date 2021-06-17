const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
});