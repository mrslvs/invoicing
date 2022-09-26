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
        },
        password: {
            type: Sequelize.DataTypes.STRING,
        },
        age: {
            type: Sequelize.DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);
