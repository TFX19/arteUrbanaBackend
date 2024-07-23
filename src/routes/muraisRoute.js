const express = require('express');
const router = express.Router();
const muraisController = require('../controllers/muraisController');

router.get('/list', muraisController.getAllMurais);
router.get('/getmural/:id', muraisController.getMuraisById);
router.get('/getmuralev/:id', muraisController.getMuraisByIdEventos);
router.post('/create', muraisController.createMurais);
router.patch('/updatemural/:id', muraisController.updateMurais);
router.delete('/deletemural/:id', muraisController.deleteMurais);
module.exports = router;