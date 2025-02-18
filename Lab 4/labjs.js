const tabla = () => {
  let numero = parseInt(prompt("Elije un numero: "));
  //parseInt funciona para convertir en entero
  //prompt sirve para pedir mensaje a usuario
  document.write(
    "<table border ='1'><tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>"
  );
  for (let i = 1; i <= numero; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + i ** 2 + "</td>");
    document.write("<td>" + i ** 3 + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
};

tabla();
const suma = () => {
  //math.random sirve para conseguir los numeros aleatorios
  //math.floor para redondearlos
  let n1 = Math.floor(Math.random() * 10); // * 10 es para que vaya de 0,1,2.....10
  let n2 = Math.floor(Math.random() * 10) + 1; //sirve para no tomar en cuenta el 0

  let ti = new Date().getTime(); //Toma el tiempo inicial
  let resultado = parseInt(
    prompt("¿Cuál es el resultado de " + n1 + " + " + n2 + " ?")
  );
  let tf = new Date().getTime();

  let tt = (tf - ti) / 1000; //esto gracias a los microsegundos

  if (resultado == n1 + n2) {
    alert("El resultado es correcto, te tardaste " + tt + " segundos");
    document.write(`El resultado fue correcto, te tardaste: ${tt} segundos`);
  } else {
    alert("El resultado es incorrecto, te tardaste " + tt + " segundos");
    document.write(`El resultado fue incorrecto, te tardaste: ${tt} segundos`);
  }
};
suma();

const contador = (arr) => {
  let cero = 0;
  let negativos = 0;
  let positivos = 0;
  for (let posicion in arr) {
    if (arr[posicion] == 0) {
      cero++;
    } else if (arr[posicion] < 0) {
      negativos++;
    } else {
      positivos++;
    }
  }

  const arreglos = document.getElementById("arreglos");
  arreglos.innerHTML = `Ceros: ${cero}<br /> Negativos:${negativos}<br />Positivos:${positivos}`;
};
arreglo = [1, 2, 3, 4, -1, -4, 0, 0, 0];
contador(arreglo);

const promedio = (matrix) => {
  let res = [];

  for (let i = 0; i < matrix.length; i++) {
    let suma = 0;
    let arr = matrix[i];
    for (let e = 0; e < arr.length; e++) {
      suma += arr[e];
    }
    let promedio = parseFloat((suma / arr.length).toFixed(2)); //hace qeu se vean solo 2 decimales
    res.push(promedio);
  }
  console.log(res);
};
arr = [
  [1, 1, 1, 1],
  [2, 4, 6, 10],
];
let res = promedio(arr);
console.log(res);
const inverso = (num) => {
  //Math.abs saca el valor absoluto
  //toString convierte a texto
  let numa = Math.abs(num).toString();
  //split() cadena en arreglo
  //reverse(invierte el arreglo)
  //join() une el arreglo
  numr = numa.split("").reverse().join("");
  //string a enteros
  let numre = parseInt(numr);
  //condicion ir, (condicion ? si es verdadero : si es falso)
  return num > 0 ? numre : -numre;
};
const inv = inverso(-123456);
const numero = document.getElementById("numero");
numero.innerHTML = `Numero inverso: ${inv}`;

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
    console.log(`Ingreso inicial: ${this.ingreso_inicial}`);
    console.log(`Ingreso mensual: ${this.ingreso_mensual}`);
    console.log(`Ingreso anual: ${this.ingreso_anual}`);
    console.log(`Años: ${this.años}`);
    console.log(`Intereses: ${this.interes}`);
  }
  ganancias() {
    let total = this.ingreso_inicial;
    let total_ingresos = 0;
    if (this.ingreso_inicial > 0) {
      for (let i = 0; i < this.años; i++) {
        total_ingresos = this.ingreso_anual + total;
        total = total_ingresos * (this.interes / 100) + total_ingresos;
      }
      this.imprime_informacion();
      console.log(
        `Despues de los años ya mencionados tendrás un total de ${total.toFixed(
          2
        )}`
      );
    } else {
      console.log("No existen beneficios ");
    }
  }
}

let inversion = new Ganancias_anuales(7.0, 10, 2, 100);
inversion.imprime_informacion();
console.log("-------------------------------");
inversion.ganancias();
