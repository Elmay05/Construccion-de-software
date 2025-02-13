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
() => {};

function imprime_info() {
  let saludo = "Hola ";
  let resp = " ¿sabians que Angel David Candelario Rolon es gay?";
  console.log(saludo + nombre + resp);
}
imprime_info();
