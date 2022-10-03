const { Sequelize } = require('sequelize');
const db = require('../config/database');

module.exports = db.define(
    'user',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
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
