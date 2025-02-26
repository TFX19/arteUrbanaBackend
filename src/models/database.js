require('dotenv').config();
const Sequelize = require('sequelize');

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

const sequelize = new Sequelize(DB_CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: false,
  }
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false, // Permite certificado autoassinado
  //   },
  // },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('❌ Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
