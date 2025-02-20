//Las funciones anonimas son recomendadas para funciones que no se van a ocupar mas adelante
const array = [10, 10, 8, 8];
const promedio = (arr) => {
  let acum = 0;
  for (let rec in arr) {
    acum += arr[rec];
  }
  acum = acum / arr.length;
  return "El promedio es: " + acum;
};

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.write(promedio(array));
  response.end();
});

server.listen(3000);
