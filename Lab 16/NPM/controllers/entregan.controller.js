const Entrega = require('../models/entrega.model'); 

exports.get_lista = (request, response, next) => { 
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    Entrega.fetchAll()
        .then(([rows, fieldData]) => { // fieldData contiene metadatos de la BD
            console.log("Campos de la tabla:", fieldData.map(field => field.name)); // Imprime nombres de columnas
            console.log("Datos obtenidos:", rows); // Imprime todos los registros
            
            response.render('lista_entregas', {
                entregas: rows, // Pasa los datos a la vista
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                info: mensaje,
            });
        })
        .catch((error) => {
            console.error("Error al obtener las entregas:", error);
            response.status(500).send("Error en el servidor");
        });
};