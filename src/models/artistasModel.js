var Sequelize = require("sequelize");
var sequelize = require("./database");

var artistas = sequelize.define(
  "artistas",
  {
    idartista: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: Sequelize.STRING,
    nomeartistico: Sequelize.STRING,
    pais: Sequelize.STRING,
    contacto: Sequelize.INTEGER,
    email: Sequelize.STRING,
    sitea: Sequelize.STRING,
    redesocial1: Sequelize.STRING,
    redesocial2: Sequelize.STRING,
    descricao: Sequelize.TEXT,
    fotografia: Sequelize.TEXT,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = artistas;