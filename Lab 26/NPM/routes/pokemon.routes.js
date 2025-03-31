const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();


const pokemon = require('../controllers/pokedex.controller');

router.get("/", pokemon.get);


router.get('/pokemon', pokemon.get_pokemon);


module.exports = router;