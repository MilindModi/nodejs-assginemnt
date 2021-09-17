const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../connection')
const Customer = sequelize.define('Customer', {
      cid : {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement:true
      },
        name1: {
            type: DataTypes.STRING, 
        },
        email: {
            type: DataTypes.STRING, 
        },
    }, {
        tableName: 'Customer',
        timestamps: false,
        
    }
);

module.exports = Customer;