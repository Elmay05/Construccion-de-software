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
