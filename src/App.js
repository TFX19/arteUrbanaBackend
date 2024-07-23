require('dotenv').config();
console.log(process.env); 
const express = require('express')
var cors = require('cors')
const app = express()
require('./models/associations')
const createError = require('http-errors')

//Configurações 
app.use(cors())
app.set('port', (process.env.PORT || 4000));

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//Routes
//Website:
const infowebsiteRoute = require('./routes/infowebsiteRoute')
app.use('/infowebsite', infowebsiteRoute)

//Artistas:
const artistasRoute = require('./routes/artistasRoute')
app.use('/artistas', artistasRoute)

//Murais:
const muraisRoute = require('./routes/muraisRoute')
app.use('/murais', muraisRoute)

//MuraisArtistas:
const muraisartistasRoute = require('./routes/murais_artistasRoute')
app.use('/muraisartistas', muraisartistasRoute)

//Eventos
const eventosRoute = require('./routes/eventosRoute')
app.use('/eventos', eventosRoute)

//EventosMurais
const eventosmuraisRoute = require('./routes/eventos_muraisRoute')
app.use('/eventosmurais', eventosmuraisRoute)

//comentarios
const comentariosRoute = require('./routes/comentariosRoute')
app.use('/comentarios', comentariosRoute)

//rota nao existe:
app.use(async (req, res, next) => {
  next(createError.NotFound("Esta rota não existe"))
})

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send({ data: err.message, success: false })
})

app.listen(app.get('port'), () => {
  console.log("Start server on port " + app.get('port'))
})