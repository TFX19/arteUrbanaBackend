var Sequelize = require("sequelize");
var sequelize = require("./database");

var infowebsite = sequelize.define(
    "infowebsite",
    {
        idinfowebsite: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        descricao2: Sequelize.STRING,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = infowebsite;