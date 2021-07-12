const models = require('./models');

async function getProducts() {
    try {
        const product1 = await models.product.findByPk(1);
        const product3 = await models.product.findByPk(3);

        console.log(product1.dataValues)
        console.log(product3.dataValues)

    } catch (err) {
        console.log(err)
    }
}

getProducts();