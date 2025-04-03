const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');


const imagenes_controller = require('../controllers/imagenes.controller');

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', isAuth, imagenes_controller.get_agregar);
router.get('/add', isAuth, imagenes_controller.get_agregar);

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', isAuth, imagenes_controller.post_agregar);

router.get('/mostrar', isAuth, imagenes_controller.get_mostrar);

router.get('/:id', isAuth, imagenes_controller.get_lista);
router.get('/', isAuth, imagenes_controller.get_lista);

router.get('/buscar/:valor', isAuth, imagenes_controller.get_buscar);
router.get('/buscar', isAuth, imagenes_controller.get_buscar);

module.exports = router;