//Estructura básica de una aplicación con express:

const express = require("express");
const app = express();

//Middleware
//info de peticion: Objeto qeu tiene toda info de peticion
//info de respuesta: Toda info de respuesta que envias

app.use((request, response, next) => {
  console.log("Middleware!");
  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});
//Express funciona por middlewares :algo qeu está en medio
//Con registrar un midleware, ya se registra en toda la app y no tengo que reescribir todo
//Para agregar middleware se usa ".use"
//next es funcion de expres que avanza al siguiente middleware
app.use((request, response, next) => {
  console.log("Otro middleware!");
  //Manda la respuesta al cliente
  response.send("¡Hola mundo!");
});

//ES UN COMPOSIT

app.listen(3000);
