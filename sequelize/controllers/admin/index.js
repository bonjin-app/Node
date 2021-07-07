const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/products', ctrl.getProducts);

router.get('/products/write', ctrl.getProductsWrite);

router.post('/products/write', ctrl.postProductsWrite);

router.get('/products/detail/:id', ctrl.getProductsDetail);

module.exports = router;


