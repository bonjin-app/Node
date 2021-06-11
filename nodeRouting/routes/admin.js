const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin 이후 url');
});

router.get('/products', (req, res) => {
    // res.send('admin products 이후 url');

    res.render('admin/products.html', {
        message: `<h1>hello!!!22</h1>`,
        online: 'express',
    });
});

module.exports = router;