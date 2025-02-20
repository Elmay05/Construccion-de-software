//fs, hola.txt y Hola desde node va con '' no con ""
const file_system = require("fs");
//Usa libreria file_system(fs o fileSystem) guardandola en la const
//require es como import

//Tiene funciones para leer y escribir archivos
//    WriteFileSync       Escribe de manera Sincronica
//  WriteFile     Escribe de manera asincrona

file_system.writeFileSync("hola.txt", "Hola desde node"); //bloquea ejecucion de todo hasta que esta instruccion termine

//----------------------------------------------------------------------
setTimeout(() => {
  console.log("jojo te hackié");
}, 15000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
  //funsiona asincrona, no interrumple el flujo, por eso se imprimen en orden los numeros
  setTimeout(() => {
    console.log(item);
  }, item);
}
//----------------------------------------------
const http = require("http"); //sirve para crear el servidor en web

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  //response.write("");
  response.end();
});

server.listen(3000); //va a correr el puerto 3000
// la funcion sigue ejecutandose, con siclo while sigue checando hasta recivir señal del http

//127:0:01  FUNCIONA COMO "localhost"
//ne algunas se puede poner "home"
//si truenas servidor acá, se truena en donde se buscó
