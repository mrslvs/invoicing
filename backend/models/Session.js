const { Sequelize } = require('sequelize')
const database = require('../config/database')

module.exports = database.define(
    'session',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        session_id: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        expires_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
)
