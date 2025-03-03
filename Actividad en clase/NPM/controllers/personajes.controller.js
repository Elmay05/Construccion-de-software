//Es bueno nombrarlos con el metodo y la ruta para saber de que es 
exports.get_agregar = (request, response, next) => {
    response.render("agregar_personaje");
};

exports.post_agregar = (request, response, next) => {
  console.log(request.body);
  personajes.push(request.body.nombre);
  console.log(personajes);
  response.render("lista_personajes", {
    personajes: personajes,
  });
};