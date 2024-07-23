var EventosMurais = require('../models/eventos_muraisModel');
var murais = require('../models/muraisModel');
var eventos = require('../models/eventosModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');

controllers.getAlleventosmurais = async (req, res, next) => {
  try {
    const data = await EventosMurais.findAll({include: { all: true }});
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createEventosMurais = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const novaAssociacao = {
      idevento: req.body.idevento,
      idmural: req.body.idmural,
    };

    const eventosmurais = await EventosMurais.create(novaAssociacao, {
      transaction: t,
    });

    await t.commit();
    res.send({ success: true, data: eventosmurais });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

// controllers.getMuraisByArtistasId = async (req, res, next) => {
//     try {
//         const {id} = req.params
//         const data = await artistas.findOne(
//             {
//                 where:{idartista : id},
//                 include: [{
//                     model: murais,
//                     through: {eventosmurais},
//                 }]
//             }
//         )
//         //check if id is not a number
//         res.send({ success: true, data: data });
//     } catch (error) {
//         next(error)
//     }
// }

controllers.deleteEventosMurais = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await EventosMurais.destroy({
      where: { idevento: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}


module.exports = controllers;