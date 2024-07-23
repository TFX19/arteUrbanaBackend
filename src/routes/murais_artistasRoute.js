const express = require('express');
const router = express.Router();
const muraisartistasController = require('../controllers/murais_artistasController');

router.get('/getallmuraisartistas', muraisartistasController.getAllMuraisArtistas);
router.post('/create', muraisartistasController.createMuraisArtistas);
router.delete('/delete/:id', muraisartistasController.deleteMuraisArtistas);

//router.get('/getmuralbyartistaid/:id', muraisartistasController.getMuraisByArtistasId);

module.exports = router;