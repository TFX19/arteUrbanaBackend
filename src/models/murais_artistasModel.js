var Sequelize = require("sequelize");
var sequelize = require("./database");

var muraisartistas = sequelize.define(
    "muraisartistas",
    {
        idartista: {
            type: Sequelize.INTEGER,
            references: {
                model: 'artistas',
                key: 'idartista',
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

module.exports = muraisartistas;