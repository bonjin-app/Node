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

router.get('/products/write', (req, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
    res.send(req.body);
});

module.exports = router;