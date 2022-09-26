const { Sequelize } = require('sequelize');
const sequelizeOptions = require('./sequelizeOptions');

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    sequelizeOptions
);
