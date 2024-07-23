var Sequelize = require("sequelize");
var sequelize = require("./database");

var eventos = sequelize.define(
    "eventos",
    {
        idevento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: Sequelize.STRING,
        datainicio: Sequelize.DATE,
        datafim: Sequelize.DATE,
        descricao: Sequelize.TEXT,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = eventos;