const db = require("./database.js");

const eventos = require("./eventosModel.js");
const murais = require("./muraisModel.js");
const artistas = require("./artistasModel.js");
const muraisartistas = require("./murais_artistasModel.js");
const eventosmurais = require("./eventos_muraisModel.js");
const comentarios = require("./comentariosModel.js");


//relacao m para m artistas murais 
artistas.belongsToMany(murais,{through: muraisartistas, foreignKey:'idartista'});
murais.belongsToMany(artistas,{through: muraisartistas, foreignKey:'idmural'});

//relacao m para m eventos murais
eventos.belongsToMany(murais,{through: eventosmurais, foreignKey:'idevento'});
murais.belongsToMany(eventos,{through: eventosmurais, foreignKey:'idmural'});

//M para 1 comentarios murais
comentarios.belongsTo(murais, {foreignKey: {name: "idmural", allowNull: false}})
murais.hasMany(comentarios, {foreignKey:{name: "idcomentario", allowNull: false}});

db.sync({logging: false});