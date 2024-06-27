
const Product = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        ProductID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supplierID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unit : {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
}
module.exports = Product;