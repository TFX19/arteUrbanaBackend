var Comentarios = require('../models/comentariosModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors');
const murais = require('../models/muraisModel');

controllers.getAllComentarios = async (req, res, next) => {
  try {
    const data = await Comentarios.findAll({
      include: [{
        model: murais,
      }]
    });
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createComentarios = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const comentarios = await Comentarios.create(
      {
        idmural: req.body.idmural,
        comentario: req.body.comentario,

      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: comentarios });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

controllers.getComentariosById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Comentarios.findByPk(id)
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.getComentariosBymuraisId = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Comentarios.findAll(
      { where: { muraisid: id } })
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.updateComentarios = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { idMural, comentario } = req.body;
    const data = await Comentarios.update({
      idmural: idMural,
      comentario: comentario,
    },
      {
        where: { idcomentario: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

controllers.deleteComentarios = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await Comentarios.destroy({
      where: { idcomentario: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;