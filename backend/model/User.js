const { Sequelize } = require('sequelize');
const database = require('../config/database');

module.exports = database.define(
    'user',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        verified: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);
