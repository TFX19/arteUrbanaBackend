var Eventos = require('../models/eventosModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAlleventos = async (req, res, next) => {
  try {
    const data = await Eventos.findAll();
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createeventos = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const eventos = await Eventos.create(
      {
        nome: req.body.nome,
        datainicio: req.body.datainicio,
        datafim: req.body.datafim,
        descricao: req.body.descricao,
      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: eventos });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

controllers.geteventosById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Eventos.findByPk(id)
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.updateeventos = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { nome, datainicio, datafim, descricao } = req.body;
    const data = await Eventos.update({
      nome: nome,
      datainicio: datainicio,
      datafim: datafim,
      descricao: descricao,
    },
      {
        where: { idevento: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

controllers.deleteeventos = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await Eventos.destroy({
      where: { idevento: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;