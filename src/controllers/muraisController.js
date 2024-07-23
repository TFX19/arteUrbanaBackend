var Murais = require('../models/muraisModel');
const artistas = require('../models/artistasModel');
const eventos = require('../models/eventosModel');
const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllMurais = async (req, res, next) => {
  try {
    const data = await Murais.findAll();
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.createMurais = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const murais = await Murais.create(
      {
        titulo: req.body.titulo,
        datainauguracao: req.body.datainauguracao,
        rua: req.body.rua,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        descricao: req.body.descricao,
        qrcode: req.body.qrcode,
        fotografia1: req.body.fotografia1,
        fotografia2: req.body.fotografia2,
        fotografia3: req.body.fotografia3,
      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: murais });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

controllers.getMuraisById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Murais.findByPk(id, {
      include: [{
        model: artistas, eventos,
        as: 'artistas',
      }],
    })
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.getMuraisByIdEventos = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Murais.findByPk(id, {
      include: [{
        model: eventos,
        as: 'eventos',
      }],
    })
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.updateMurais = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { titulo, datainauguracao, rua, latitude, longitude, descricao, qrcode, fotografia1, fotografia2, fotografia3 } = req.body;
    const data = await Murais.update({
      titulo: titulo,
      datainauguracao: datainauguracao,
      rua: rua,
      latitude: latitude,
      longitude: longitude,
      descricao: descricao,
      qrcode: qrcode,
      fotografia1: fotografia1,
      fotografia2: fotografia2,
      fotografia3: fotografia3,
    },
      {
        where: { idmural: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

controllers.deleteMurais = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await Murais.destroy({
      where: { idmural: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;