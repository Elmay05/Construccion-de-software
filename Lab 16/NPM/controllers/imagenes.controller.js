const Imagen = require('../models/imagenes.model');
const Entregan = require('../models/entregan.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_imagen', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        niveles: [],
    });
};
exports.get_buscar = (request, response, next) => { 
    console.log(request.params.valor);
    Entregan.find(request.params.valor).then(([rows, fieldData]) => {
        console.log(rows);
        response.status(200).json({entregas: rows});
        
        
    }).catch((error) => {
        response.status(500).json({message: "Internal Server Error"});
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

    // Ejecuta ambas consultas en paralelo
    Promise.all([
        Imagen.fetch(request.params.id),
        Entregan.fetchAll()
    ])
    .then((results) => {
        const [imagenesData, entregasData] = results;

        const imagenes = imagenesData[0];  // Los datos de las imágenes
        const entregas = entregasData[0];  // Los datos de las entregas

        console.log("Imágenes obtenidas:", imagenes);
        console.log("Entregas obtenidas:", entregas);

        response.render('carrousel', {
            imagenes: imagenes,
            entregas: entregas,
            isLoggedIn: request.session.isLoggedIn || false,
            username: request.session.username || '',
            info: mensaje,
            privilegios: request.session.privilegios || [],
        });
    })
    .catch((error) => {
        console.error("Error al obtener los datos:", error);
        response.status(500).send("Error en el servidor");
    });
};

exports.get_pedidos= (request, response, next) => { 
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
 
    
};


exports.get_mostrar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};