var express = require('express');
var router = express.Router();
const comentariosControllers = require('../controllers/comentarios.c')

/* GET users listing. */
router.get('/', comentariosControllers.listar);

router.post('/', comentariosControllers.agregar);

module.exports = router;
