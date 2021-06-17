const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.listen(3000, () => {
    console.log('start! express server on port 3000');
});

app.get('/', function(req, res){
   res.send(`<h1>hello world</h1>`); 
});