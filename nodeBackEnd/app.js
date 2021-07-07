const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');

app.listen(3000, () => {
    console.log('start! express server on port 3000');
});

// app.use('/public', express.static('public'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./router/index'))
app.set('view engine', 'ejs');