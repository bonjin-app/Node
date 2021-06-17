const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/main', require('./main'));
router.use('/email', require('./email'));

router.get('/', function(req, res) {
//    res.send(`<h1>hello world</h1>`); 
    res.sendFile(path.join(__dirname+'/public/main.html'));
});

module.exports = router;