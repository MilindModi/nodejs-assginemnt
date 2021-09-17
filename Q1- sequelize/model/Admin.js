const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../connection')

const Admin = sequelize.define('Admin', {
        adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true

        },
        adminName: {
            type: DataTypes.STRING, 
        },
        phone: {
            type: DataTypes.STRING, 
        },
        password: {
            type: DataTypes.STRING, 
        },
    }, {
        tableName: 'admin',
        timestamps: false
    }
);

module.exports = Admin;