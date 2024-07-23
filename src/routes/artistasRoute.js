const express = require('express');
const router = express.Router();
const artistasController = require('../controllers/artistasController');

router.get('/list', artistasController.getAllArtistas);
router.get('/getartista/:id', artistasController.getArtistasById);
router.get('/countdashboardadmin', artistasController.countdashboardadmin);
router.post('/create', artistasController.createArtistas);
router.patch('/updateartista/:id', artistasController.updateArtistas);
router.delete('/deleteartista/:id', artistasController.deleteArtistas);
module.exports = router;