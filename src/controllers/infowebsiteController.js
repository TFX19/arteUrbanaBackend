var InfoWebsite = require('../models/infowebsiteModel');

const controllers = {};
var sequelize = require("../models/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const createError = require('http-errors')

controllers.getAllCamposInfoWebsite = async (req, res, next) => {
  try {
    const data = await InfoWebsite.findAll();
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
};

// controllers.createCampoInfoiWebsite = async (req, res, next) => {
//     const t = await sequelize.transaction();
//     try {
//         const infoWebsite = await InfoWebsite.create(
//             {
//                 nome: req.body.ws_nome,
//                 texto: req.body.ws_texto,
//             },
//             { transaction: t }
//         );
//         await t.commit();
//         res.send({ success: true, data: infoWebsite });
//     } catch (e) {
//         await t.rollback();
//         next(e);
//     }
// };

controllers.getCampoInfoWebsiteById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await InfoWebsite.findByPk(id)
    //check if id is not a number
    res.send({ success: true, data: data });
  } catch (error) {
    next(error)
  }
}

controllers.updatecamposwebsite = async (req, res, next) => {
  try {
    const { id } = req.params;
    //check if id is not a number
    if (isNaN(id)) return createError.BadRequest("id is not a number")

    const { titulo, descricao, descricao2 } = req.body;
    const data = await InfoWebsite.update({
      titulo: titulo,
      descricao: descricao,
      descricao2: descricao2,
    },
      {
        where: { idinfowebsite: id }
      })
    res.send({ success: true, data: data, message: "Updated successful" });
  } catch (error) {
    next(error)
  }
}

// controllers.deleteCampoinfoWebsite = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         //check if id is not a number
//         if (isNaN(id)) return createError.BadRequest("id is not a number")
//         const del = await InfoWebsite.destroy({
//             where: { ws_id: id }
//         })
//         res.send({ success: true, deleted: del, message: "Deleted successful" });
//     } catch (error) {
//         next(error)
//     }
// }
module.exports = controllers;