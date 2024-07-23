const express = require ('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController');

router.get('/list', comentariosController.getAllComentarios);
router.get('/getcomentarios/:id', comentariosController.getComentariosById);
router.get('/getcomentariosbymurais/:id', comentariosController.getComentariosBymuraisId);
router.post('/create', comentariosController.createComentarios);
router.patch('/uptadecomentarios/:id', comentariosController.updateComentarios);
router.delete('/deletecomentarios/:id',comentariosController.deleteComentarios);
module.exports = router;