var muraisartistas = require('../models/murais_artistasModel');
var murais = require('../models/muraisModel');
var artistas = require('../models/artistasModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');

controllers.getAllMuraisArtistas = async (req, res, next) => {
  try {
    const data = await muraisartistas.findAll();
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};
controllers.createMuraisArtistas = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const novaAssociacao = {
      idmural: req.body.idmural,
      idartista: req.body.idartista,
    };

    const muraisArtistas = await muraisartistas.create(novaAssociacao, {
      transaction: t,
    });

    await t.commit();
    res.send({ success: true, data: muraisArtistas });
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
//                     through: {muraisartistas},
//                 }]
//             }
//         )
//         //check if id is not a number
//         res.send({ success: true, data: data });
//     } catch (error) {
//         next(error)
//     }
// }

controllers.deleteMuraisArtistas = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await muraisartistas.destroy({
      where: { idmural: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}


module.exports = controllers;