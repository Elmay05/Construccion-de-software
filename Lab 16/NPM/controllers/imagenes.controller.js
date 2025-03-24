const Imagen = require('../models/imagenes.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_imagen', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        niveles: [],
    });
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const imagen = new Imagen(
        request.body.nombre, request.file.filename
        );
        
    imagen.save()
        .then(() => {
            request.session.info = `Imagen ${imagen.nombre} guardado.`;
            response.redirect('/imagenes');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_lista = (request, response, next) => { 
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    Imagen.fetch(request.params.id)
        .then(([rows, fielData]) => {
            console.log(fielData);
            console.log(rows);
            response.render('carrousel', {
                imagenes: rows,
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                info: mensaje,
                privilegios: request.session.privilegios || [],
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_mostrar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};