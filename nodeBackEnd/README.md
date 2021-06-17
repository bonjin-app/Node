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

### DB
```bash
npm install mysql
```