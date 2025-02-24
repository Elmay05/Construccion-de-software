const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Log in</title>
    <link rel="stylesheet" href="estilos.css" />
    <style>
        body {
            font-family: "Helvetica", "Arial", sans-serif; /*va agarrando los tipos de letras de izq a derecha*/
            line-height: 1.5;
            color: #555;
            background-color: #494d92;
            /*Hace que sea flexible su conetnido (que su comportamiento se adapte al tamaño de contenido*/
            display: flex;
            /*Centra orizontamente el contenido*/
            justify-content: center;
            /*Centra verticalmente el contenido*/
            align-items: center;
            /*Hace qeu el body ocupe el 100% del alto de la pantalla*/
            height: 100vh;
            /*Elimina margenes predeterminados del body*/
            margin: 0;
        }
        .container {
            max-width: 256px; /*Limita ancho maximo del contenedor para que no sea tan grande */
            width: 90%; /*Hace que container sea flexible en pantallas pequeñas*/
            background-color: #6c72de;
            color: #ffffff;
            padding: 20px; /*espacio interno para que no se pegue con el texto*/
            border-radius: 2em; /*Redondea las esquinas*/
            text-align: center; /*Alinea contenido */
            /*el primero (0) define cuanto se meuve la sombra a la derecha o izquierda(negativo) */
            /*El segunto(2px) define cuanto se mueve hacia abajo (positivo) o arriba(negativo)*/
            /*EL tercero indica que tan difuso será la sombra*/
            box-shadow: 0 2px 8px #000000; /*Sirve para darle profundidad*/
        }
        button {
            background-color: #8b90e8;
            border-radius: 6px;
        }
        .hidden {
            display: none;
    </style>
  </head>`;

const html_login = `

  <body>
    <div class="container" id="container">
      <h1>Iniciar Sesión</h1>
      <!--Definir formulario para login-->
      <!--Se pone ID para mandarlos al JS-->
      <form id="formulario" action="/" method="POST">
        <div>
          <!--Se usa para relacionarlo con el campo-->
          <label>Correo Electronico</label>
          <!--Se pone el type para esperar formatos de correo electronico-->
          <!--Se pone id para poder manipularlo en el JS-->
          <!--Se pone required para que el campo sea obligatorio-->
          <input type="email" id="email" required />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" id="password" required />
        </div>
        <button
          type="submit"
          id="boton"
          onmouseover="presiona(this)"
          onmouseout="fuera(this)"
        >
          Ingresa
        </button>
        <p id="mensajedeerror" class="hidden">Correo o contraseña incorrecta</p>
      </form>
    </div>
    <script src="login.js"></script>
  </body>
</html>
`;

const html_footer = `</div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
        <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
            The source code is licensed
            <a href="https://opensource.org/license/mit">MIT</a>. The
            website content is licensed
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
            >CC BY NC SA 4.0</a
            >.
        </p>
        </div>
    </footer>
  </body>
</html>
`;

const productos = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Nike</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css">
    <style>
        *{
            background-color: #121212;
            color: white;
        }
        section{
            color: white;
            height: 100vh;
        }
        .product {
            color: white;
            border-radius: 15px;
            padding: 20px;
            background: #1e1e1e;
            transition: transform 0.4s ease;
            margin: 20px;
        }
        .product:hover {
            transform: scale(1.05); 
            cursor: pointer;
        }
        .help-text {
            color: white;
            font-size: 0.9em;
            display: none;
        }
        h2,h3{
            color: #fff;
        }
        .questions {
            margin: 0 20%;
            color: white;
        }
    </style>
</head>
<body>
    <section class="section">
        <div class="container">
            <h1 class="title has-text-white">Tienda Nike</h1>
            <div class="columns">
                <div class="column product has-text-centered">
                    <img src="./public/1.png" width="200">
                    <h2 class="subtitle">Nike Club Fleece Crew</h2>
                    <p>$799 MXN</p>
                    <input type="number" id="p1" min="0" max="10" value="0" class="input" onfocus="showHelp(1)" onblur="hideHelp(1)">
                    <p id="help1" class="help-text">Elige entre 0 y 10 unidades.</p>
                </div>
                <div class="column product has-text-centered">
                    <img src="./public/2.png" width="200">
                    <h2 class="subtitle">Nike Pro Sculpt Shorts</h2>
                    <p>$699 MXN</p>
                    <input type="number" id="p2" min="0" max="10" value="0" class="input" onfocus="showHelp(2)" onblur="hideHelp(2)">
                    <p id="help2" class="help-text">Elige entre 0 y 10 unidades.</p>
                </div>
                <div class="column product has-text-centered">
                    <img src="./public/3.png" width="200">
                    <h2 class="subtitle">Nike Club Hoodie</h2>
                    <p>$899 MXN</p>
                    <input type="number" id="p3" min="0" max="10" value="0" class="input" onfocus="showHelp(3)" onblur="hideHelp(3)">
                    <p id="help3" class="help-text">Elige entre 0 y 10 unidades.</p>
                </div>
            </div>
            <button class="button is-primary" onclick="calcularTotal()">Calcular Total</button>
            <h2 class="title">Subtotal: <span id="subtotal">$0 MXN</span></h2>
            <h3 class="subtitle">IVA (16%): <span id="iva">$0 MXN</span></h3>
            <h2 class="title">Total con IVA: <span id="total">$0 MXN</span></h2>
        </div>
    </section>
    <section class="questions">
        <h1>Preguntas y Respuestas</h1>
        <p><strong>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</strong></p>
        <p>Es una buena práctica porque permite mejorar la experiencia del usuario al proporcionar retroalimentación instantánea sin necesidad de recargar la página. Además, reduce la carga en el servidor al filtrar datos incorrectos antes de enviarlos.</p>
        <p><strong>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</strong></p>
        <p>Es posible saltarse la seguridad deshabilitando JavaScript en el navegador o manipulando directamente los valores enviados al servidor mediante herramientas como el inspector de elementos del navegador o aplicaciones como Postman.</p>
        <p><strong>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</strong></p>
        <p>Aunque JavaScript no es suficiente para garantizar la seguridad, sigue siendo útil para mejorar la usabilidad y la eficiencia. Sin embargo, siempre se deben realizar validaciones del lado del servidor para garantizar la seguridad de los datos.</p>
    </section>

</body>
</html>

`;

// Scripts de pagina productos
function calcularTotal() {
  let p1 = parseInt(document.getElementById("p1").value) || 0;
  let p2 = parseInt(document.getElementById("p2").value) || 0;
  let p3 = parseInt(document.getElementById("p3").value) || 0;

  if (p1 > 10 || p2 > 10 || p3 > 10) {
    alert("No puedes seleccionar más de 10 unidades por producto.");
    return;
  }

  let subtotal = p1 * 799 + p2 * 699 + p3 * 899;
  let iva = subtotal * 0.16;
  let total = subtotal + iva;

  document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)} MXN`;
  document.getElementById("iva").innerText = `$${iva.toFixed(2)} MXN`;
  document.getElementById("total").innerText = `$${total.toFixed(2)} MXN`;
}
function showHelp(id) {
  document.getElementById("help" + id).style.display = "block";
}
function hideHelp(id) {
  document.getElementById("help" + id).style.display = "none";
}

//------------------------------------Iniciando servidor-----------------------------------
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/" && request.method == "GET") {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(html_header + html_login);
    response.end();
  } else if (request.method == "POST") {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(productos);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write(html_header + "La página no existe" + html_footer);
    response.end();
  }
});

server.listen(4003);
console.log("server on port 4003");
