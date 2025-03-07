const express = require('express');
const router = express.Router();

const entregan_controller = require('../controllers/entregan.controller');

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST

router.get('/mostrar', entregan_controller.get_lista);


module.exports = router;