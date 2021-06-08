const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
    // res.send('admin products 이후 url');

    res.render('admin/products.html', {
        message: 'hello!!!22'
    });
});

module.exports = router;