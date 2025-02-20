//Las funciones anonimas son recomendadas para funciones que no se van a ocupar mas adelante
const fileSystem = require("fs");
const http = require("http");

const array = [10, 10, 8, 8];
const promedio = (arr) => {
  let acum = 0;
  for (let rec in arr) {
    acum += arr[rec];
  }
  acum = acum / arr.length;
  return "El promedio es: " + acum;
};

const string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

fileSystem.writeFileSync("Actividad2.txt", string);

class Ganancias_anuales {
  //Constructor
  constructor(interes, ingreso_inicial, años, ingreso_mensual) {
    this.ingreso_inicial = parseFloat(ingreso_inicial);
    this.ingreso_mensual = parseInt(ingreso_mensual);
    this.ingreso_anual = this.ingreso_mensual * 12;
    this.años = parseInt(años);
    this.interes = parseFloat(interes);
  }
  //Metodos
  imprime_informacion() {
    return `<br/><br/>Ingreso inicial: ${this.ingreso_inicial}
  <br/>Ingreso mensual: ${this.ingreso_mensual}
  <br/>Ingreso anual: ${this.ingreso_anual}
  <br/>Years: ${this.años}
  <br/>Intereses: ${this.interes}`;
  }

  ganancias() {
    let total = this.ingreso_inicial;
    let total_ingresos = 0;
    if (this.ingreso_inicial > 0) {
      for (let i = 0; i < this.años; i++) {
        total_ingresos = this.ingreso_anual + total;
        total = total_ingresos * (this.interes / 100) + total_ingresos;
      }
      const info = this.imprime_informacion();
      return (
        info +
        "<br/>Despues de los years ya mencionados you have a total de: " +
        total.toFixed(2)
      );
    } else {
      return "<br/>No existen beneficios ";
    }
  }
}

let inversion = new Ganancias_anuales(7.0, 10, 2, 100);

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.write(promedio(array));
  response.write(inversion.ganancias());
  response.end();
});

server.listen(3000);
