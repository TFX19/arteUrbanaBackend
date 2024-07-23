var Artistas = require('../models/artistasModel');
var Murais = require('../models/muraisModel');
var Eventos = require('../models/eventosModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllArtistas = async (req, res, next) => {
  try {
    const data = await Artistas.findAll();
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.countdashboardadmin = async (req, res, next) => {
  try {
    const artistasdata = await Artistas.findAll();
    const artistascount = artistasdata.length;

    const muraisdata = await Murais.findAll();
    const muraiscount = muraisdata.length;

    const eventosdata = await Eventos.findAll();
    const eventoscount = eventosdata.length;

    res.send({
      success: true,
      artistascount: artistascount,
      muraiscount: muraiscount,
      eventoscount: eventoscount,
    });
  } catch (error) {
    next(error)
  }
};

controllers.createArtistas = async (req, res, next) => {
  const t = await sequelize.transaction();
  console.log(req.body)
  try {
    const artistas = await Artistas.create(
      {
        nome: req.body.nome,
        nomeartistico: req.body.nomeartistico,
        pais: req.body.pais,
        contacto: req.body.contacto,
        email: req.body.email,
        sitea: req.body.sitea,
        redesocial1: req.body.redesocial1,
        redesocial2: req.body.redesocial2,
        descricao: req.body.descricao,
        fotografia: req.body.fotografia,
      },
      { transaction: t }
    );
    await t.commit();
    res.send({ success: true, data: artistas });
  } catch (e) {
    await t.rollback();
    next(e);
  }
};

controllers.getArtistasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Artistas.findByPk(id)
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

controllers.updateArtistas = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { nome, nomeartistico, pais, contacto, email, sitea, redesocial1, redesocial2, descricao, fotografia } = req.body;
    const data = await Artistas.update({
      nome: nome,
      nomeartistico: nomeartistico,
      pais: pais,
      contacto: contacto,
      email: email,
      sitea: sitea,
      redesocial1: redesocial1,
      redesocial2: redesocial2,
      descricao: descricao,
      fotografia: fotografia,
    },
      {
        where: { idartista: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

controllers.deleteArtistas = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")
    const del = await Artistas.destroy({
      where: { idartista: id }
    })
    res.send({ success: true, deleted: del, message: "Deleted successful" });
  } catch (error) {
    next(error)
  }
}
module.exports = controllers;