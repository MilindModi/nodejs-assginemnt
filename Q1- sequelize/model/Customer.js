const {Sequelize,DataTypes} = require('sequelize');
const Admin = require('./Admin');
const sequelize = require('../connection')
const Customer = sequelize.define('Customer', {
        customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true   
        },
        CustomerName: {
            type: DataTypes.STRING, 
        },
        phone: {
            type: DataTypes.STRING, 
        },
        password: {
            type: DataTypes.STRING, 
        },
        adminId: {
            type: DataTypes.INTEGER,
            references : {
                model : Admin,
                key : 'adminId'
            } 
        },
    }, {
        tableName: 'Customer',
        timestamps: false
    }
);

module.exports = Customer;