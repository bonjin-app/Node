module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
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
            freezeTableName: true,  // DEFAULT: false = 기본적으로 전달 된 모든 모델 이름 (define의 첫 번째 매개 변수)을 복수형으로 변환합니다.
            timestamps: true   // DEFAULT: true = createdAt, updatedAt
        }
    )
    return Product;
}