const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

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

app.use("/personajes", rutasPersonajes);

app.use((request, response, next) => {
  console.log("Otro middleware!");

  //Manda la respuesta
  response.send("¡Hola mundo!");
});

app.listen(3000);
