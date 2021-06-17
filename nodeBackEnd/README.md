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
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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