const Sequelize = require('sequelize');

const DB_CONNECTION_STRING = 'postgres://nrkhqqkm:XIebNuS93r3_2P0WgIjntRKC2yIX5bjj@kandula.db.elephantsql.com/nrkhqqkm';
const sequelize = new Sequelize(DB_CONNECTION_STRING, { dialect: 'postgres' });

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
