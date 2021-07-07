module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        'product',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.INTEGER
            },
            description: {
                type: DataTypes.TEXT
            }
        },
        {
            timestamps: true   // DEFAULT: true = createdAt, updatedAt
        }
    )
    return Products;
}