const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('start! express server on port 3000');
});

// app.use('/public', express.static('public'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./router/index'))
app.set('view engine', 'ejs');