const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");

  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});

//Este middleware se registra sólo en la ruta /chewy
app.use("/chewy", (request, response, next) => {
  response.send("Hola desde la ruta /chewy");
});

const rutasPersonajes = require("./routes/personajes.routes");
const matriculas = require("./routes/matriculas");
app.use("/personajes", rutasPersonajes);

app.use(matriculas);

app.use(rutasPersonajes);

app.listen(3000);
