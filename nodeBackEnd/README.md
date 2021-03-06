# node backend

### install
- init
```bash
npm init -y
```
https://expressjs.com/ko/
- express install
```bash
npm install express
```

### body-parser
```js
// deprecate
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// new
const express = require('express');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
```

### View Engine - ejs
```bash
npm install ejs
```

```js
app.set('view engine', 'ejs');
```

### DB MySQL
https://github.com/mysqljs/mysql
```bash
npm install mysql
```

### passport
passport: http://www.passportjs.org/docs/downloads/html/
passport-local: http://www.passportjs.org/packages/passport-local/
express-session: https://www.npmjs.com/package/express-session
connect-flash: https://www.npmjs.com/package/connect-flash

```bash
npm install passport passport-local express-session connect-flash --save-dev
```