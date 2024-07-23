const express = require('express');
const router = express.Router();
const eventosmuraisController = require('../controllers/eventos_muraisController');

router.get('/getalleventosmurais', eventosmuraisController.getAlleventosmurais);
router.post('/create', eventosmuraisController.createEventosMurais);
router.delete('/delete/:id', eventosmuraisController.deleteEventosMurais);
//router.get('/getmuralbyartistaid/:id', eventosmuraisController.getMuraisByArtistasId);

module.exports = router;