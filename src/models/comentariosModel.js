var Sequelize = require("sequelize");
var sequelize = require("./database");

var comentarios = sequelize.define(
    "comentarios",
    {
        idcomentario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comentario: Sequelize.TEXT,
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = comentarios;