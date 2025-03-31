const express = require('express');
const fetch = require("node-fetch");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static(path.join(__dirname, 'public')));


const pokemon = require('./routes/pokemon.routes');
app.use('/', pokemon);

app.listen(3000);