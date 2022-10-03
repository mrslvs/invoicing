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
        google_secret_2fa: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);
