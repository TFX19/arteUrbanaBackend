require('dotenv').config();

const { Sequelize } = require('sequelize');

const databaseUrl = process.env.DATABASECONNECTIONSTRING;

if (!databaseUrl) {
    throw new Error("DATABASECONNECTIONSTRING is not defined!");
}

const sequelize = new Sequelize(databaseUrl, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, 
        },
    },
});

module.exports = sequelize;
