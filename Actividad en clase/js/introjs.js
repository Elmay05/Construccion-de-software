//consola (log, info, warn, error, assert)
console.log("Hola mundo wookie!"); //no es necesario el ";" pero se ponen por diciplina
console.info("Aquí andamos aprendiendo");
console.warn("Te vamos a coger si sigues hakeando");
console.error("grrrrrrrrr");
console.assert(1 == 1); //compara valores sin especificar
console.assert(1 === 1);
console.assert(1 == "1");
console.assert(1 === "1"); //comparacion estricta, toma en cuenta el tipo de dato
console.assert(1 == true);
console.assert(1 === true);
//
//si no tiene memoria devuelve 0
//

//variables, constantes
var wookie = "Cheewaca"; //se usaba antes
//todos tienen acceso a la variable
//en ciclo for, la variable sigue existiendo
let otro_wookie = "Tarful"; //es mas seguro que var
//mas privada, en ciclo for, despues deja de existir
console.log(otro_wookie);

let precio = 99.99; //se usan constantes ya que (en compras, la gente podría cambiarlos)(compran carro de $200,000,000 en $1)
const precio_correcto = 99.99;

//Alcance de las variables
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); //como la variable se declaró en el for con let, despues del for, i muere

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);
//la variable se declaro con var, al final sigue existiendo y se puede cambiar, por seguridad se usa let, ayuda a la memoria igual

//alert, prompt, confirm
alert("Salta al pagina");
//prompt("¿Cómo te llamas?");
const nombre = prompt("¿Cómo te llamas?");
//este guarda en nombre en una variable
console.log(nombre);
const is_hambre = true;
//funciones tradicionales
function imprime_status() {
  let respuesta = "";
  if (is_hambre) {
    respuesta = " Tiene hambre";
  }
  console.log(nombre + respuesta);
}
imprime_status();

//funciones modernas
//Parametros de la funcion (anonima) => lo que regresa{}
() => {};

//DOM (Me permite poner comportamiento a pagina web)

const mi_funcion = () => {
  console.log("sk.djnverne.wjkn desde una funcion anonima");
};
mi_funcion();

//Arreglos
const arreglo = ["Elemento"];
//puedo modificar los elementos del arreglo ya que lo que se guarda es la direccion del arreglo, no se pueden hacer cosas como funciones mas adelante
const arreglo2 = new Array();

//para agregar mas elementos
arreglo.push("Otro elemento");
//aumenta a tamaño 11 el arreglo y agrega en la posicion 10
arreglo[10] = "Uno más";

//arreglos asociativos;
arreglo["uno"] = 5;
//se hace propiedad mas que un elemento del arreglo

//recorrido tradicional del arreglo
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}
console.log("Operador in");
//recorrido alternativo del arreglo
//in imprime la posicion
for (let posicion in arreglo) {
  console.log(posicion);
}

//of recorre los valores del arreglo
for (let posicion of arreglo) {
  console.log(posicion);
}
//pop para eliminar el ultimo elemento del arreglo

//objeto: conjunto de llaves asociado con valores, son muy dinamicos
const objeto = {};
//para objetos no se puede utilizar el of
objeto.atributo1 = "hola";
objeto.atributo2 = [];
objeto.atributo3 = {};

for (let posicion in objeto) {
  console.log(posicion);
}

//codificar html (acceder al DOM)
console.log(document);
