const Employee = (sequelize, DataTypes) => {
    return sequelize.define('Employee', {
        employeeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING
        },
        notes: {
            type: DataTypes.TEXT
        }
    })
}

module.exports = Employee