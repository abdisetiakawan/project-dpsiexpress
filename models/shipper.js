const Shipper = (sequelize, DataTypes) => {
    return sequelize.define('Shipper', {
        ShipperID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ShipperName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
module.exports = Shipper