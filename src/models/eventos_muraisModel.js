var Sequelize = require("sequelize");
var sequelize = require("./database");

var eventosmurais = sequelize.define(
    "eventosmurais",
    {
        idevento: {
            type: Sequelize.INTEGER,
            references: {
                model: 'eventos',
                key: 'idevento',
            },
        },
        idmural:{
            type: Sequelize.INTEGER,
            references: {
                model: 'murais',
                key: 'idmural',
            },
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = eventosmurais;