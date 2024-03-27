const { Sequelize } = require('sequelize');
const database = require('../config/database');

module.exports = database.define(
    'address',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        line1: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        line2: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        },
        // Country ISO 3166-1 alpha-2 code
        countryCode: {
            type: Sequelize.DataTypes.STRING(2),
            allowNull: false,
        },
        postalCode: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);
