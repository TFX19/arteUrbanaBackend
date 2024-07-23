const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventosController');

router.get('/list', eventosController.getAlleventos);
router.get('/getevento/:id', eventosController.geteventosById);
router.post('/create', eventosController.createeventos);
router.patch('/updateevento/:id', eventosController.updateeventos);
router.delete('/deleteevento/:id', eventosController.deleteeventos);
module.exports = router;