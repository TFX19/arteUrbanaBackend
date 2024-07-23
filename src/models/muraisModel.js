var Sequelize = require("sequelize");
var sequelize = require("./database");

var murais = sequelize.define(
  "murais",
  {
    idmural: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: Sequelize.STRING,
    datainauguracao: Sequelize.DATE,
    rua: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    descricao: Sequelize.STRING,
    qrcode: Sequelize.STRING,
    fotografia1: Sequelize.TEXT,
    fotografia2: Sequelize.TEXT,
    fotografia3: Sequelize.TEXT,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = murais;