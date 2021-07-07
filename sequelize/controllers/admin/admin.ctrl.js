const models = require('../../models');

exports.getProducts = (_, res) => {
    models.product.findAll({

    }).then((products) => {
        res.render('admin/products.html', {
            products
        })
    })
}

exports.getProductsWrite = (_, res) => {
    res.render('admin/write.html');
}

exports.postProductsWrite = (req, res) => {
    models.product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }).then(() => {
        res.redirect('/admin/products');
    })
}

exports.getProductsDetail = (req, res) => {
    models.product.findByPk(req.params.id)
        .then((product) => {
            res.render('admin/detail.html', { product });
        });
}