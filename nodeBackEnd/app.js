const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('start! express server on port 3000');
});

// app.use('/public', express.static('public'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/main', require('./router/main'));
app.use('/email', require('./router/email'));

app.get('/', function(req, res) {
//    res.send(`<h1>hello world</h1>`); 
    res.sendFile(__dirname+'/public/main.html');
});