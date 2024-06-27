
const Category = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
        categoryID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CategoryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
}
// const Customer = (sequelize, DataTypes) => {
//     return
// }
module.exports = Category;