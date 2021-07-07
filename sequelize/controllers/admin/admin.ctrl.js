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

exports.getProductsEdit = (req, res) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    models.product.findByPk(req.params.id).then((product) => {
        res.render('admin/write.html', { product: product });
    });
};

exports.postProductsEdit = (req, res) => {
    models.product.update(
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        },
        {
            where: { id: req.params.id }
        }
    ).then(() => {
        res.redirect('/admin/products/detail/' + req.params.id);
    });
}

exports.getProductsDelete = (req, res) => {
    models.product.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/admin/products');
    });
};