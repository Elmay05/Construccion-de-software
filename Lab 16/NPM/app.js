const express = require('express');
const app = express();
const csurf = require('csurf');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, 
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(csurf());
// 💡 Middleware CSRF debe ir después de sesiones y bodyParser


// 💡 Middleware para pasar csrfToken a todas las vistas
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Importar rutas
const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);

const rutasEntregan = require('./routes/entregan.routes');
app.use("/entregan", rutasEntregan);

// Middleware para manejar errores 404
app.use((request, response, next) => {
    response.status(404).send('Recurso no encontrado'); 
});

app.listen(3000);