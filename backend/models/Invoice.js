const { Sequelize } = require('sequelize');
const db = require('../config/database');

module.exports = db.define(
    'invoice',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        invoice_number: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        invoice_amount: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);
