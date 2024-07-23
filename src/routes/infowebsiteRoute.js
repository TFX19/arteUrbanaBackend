const express = require('express');
const router = express.Router();
const infowebsiteController = require('../controllers/infowebsiteController');

router.get('/list', infowebsiteController.getAllCamposInfoWebsite);
router.get('/getinfowebsite/:id', infowebsiteController.getCampoInfoWebsiteById);
router.patch('/update', infowebsiteController.updatecamposwebsite);

module.exports = router;