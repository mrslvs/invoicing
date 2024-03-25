const { Sequelize } = require('sequelize')

sequelizeOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
}

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    sequelizeOptions
)
