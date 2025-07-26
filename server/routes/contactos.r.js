var express = require('express');
var router = express.Router();

const contactosControllers = require('../controllers/contactos.c')

router.post('/', contactosControllers.agregar);

module.exports = router;
