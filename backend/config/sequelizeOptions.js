require('dotenv');

sequelizeOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
};

module.exports = sequelizeOptions;
