const express = require("express");

const router = express.Router();

const omar = `
<!DOCTYPE html>
<!--Esta etiqueta sirve para definir que usaremos HTML5-->
<html>
  <head>
    <title>Mis datos personales</title>
    <!--Sale en la pestaña-->
    <meta charset="UTF-8" />
    <!--Para poder usar caracteres especiales-->
    <link rel="stylesheet" href="estilos.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
      @impotr 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';

      header {
        background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20210115/pngtree-blue-gradient-web-ui-background-image_518658.jpg");
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        line-height: 1.2;
        padding: 10vw 2em;
        text-align: center;
        width: 100%;
      }
      footer {
        background-image: url("https://media.istockphoto.com/id/1419766496/es/foto/conceptos-abstractos-de-tecnolog%C3%ADa-de-ciberseguridad-y-protecci%C3%B3n-de-datos-digitales-proteja.jpg?s=612x612&w=0&k=20&c=5vCzRZ4xY7X_GcnuznSIbY4Nvt0hbou0mOiELVdk9Sc=");
        background-position: center top;
        background-repeat: no-repeat;
        background-size: cover;
        line-height: 1.2;
        padding: 1vw 2em;
        text-align: center;
        width: 100%;
        background-size: 100% 100%; /* Ajusta los porcentajes según tus necesidades */
      }
      table {
        margin: 0 auto;
        color: #46e5f4;
        max-width: 50em; /*tamaño en relacion con la M mayuscula*/
      }
      .container {
        margin: 0 auto;
        max-width: 50em; /*tamaño en relacion con la M mayuscula*/
      }
      footer {
        background-color: chartreuse;
      }
      body {
        font-family: "Helvetica", "Arial", sans-serif; /*va agarrando los tipos de letras de izq a derecha*/
        line-height: 1.5;
        color: #555;
        background-color: #c2eeff;
      }
      a {
        color: #e81c4f;
      }
      a:hover {
        color: black;
      }

      .advertencia {
        background-image: url("https://img.freepik.com/vector-premium/fondo-seguridad-alerta_97886-3460.jpg");
        background-size: 10% 80%; /* Ajusta los porcentajes según tus necesidades */
        background-position: center;
        text-align: center;
        margin: 0 auto;
      }
      strong {
        font-size: large;
        color: rgb(84, 2, 2);
      }
      h1,
      h2 {
        color: darkblue;
      }
      h3 {
        color: blue;
      }
      h5 {
        color: dodgerblue;
      }
      .biblio {
        background-color: #cecece;
        border-radius: 0.5em;
      }


    </style>
  </head>
  <body>
   
    <header >
      <!--Eiqueta para el encabezado de tu pagina-->
      <h1>A01712114 - Omar Emilio Casillas Alday</h1>
    </header>
   
    <!--Etiqueta para resaltar fragmenttos de texto importantes-->
    <div class="container">
      
      <div class="advertencia">
        <strong>Esta pagina se hace sin fines de lucro</strong>
      </div>
      
      <h1>Lugar de origen</h1>
      <p>
        Soy de Dolores Hidalgo, pueblito muy bonito en el que podrás encontrar
        helados de muchos sabores como mole, beso de angel, petalos de rosa,
        elote, rosa, entre otros
      </p>
      <h1>Hobbies</h1>
      <ol>
        <!--Etiquea para crear listas-->
        <li>Cantar</li>
        <!--Elementos de la lista-->
        <li>Bailar</li>
        <li>Tocar guitarra</li>
        <li>Viajar</li>
        <li>Programar</li>
      </ol>
      <h1>Preguntas 1</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              ¿Cuál es la diferencia entre Internet y la World Wide Web?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            
              El internet es una gran cantidad de computadoras conectadas entre ellas en
              todo el mundo, mientras que la World Wide Web es una red mundial de
              documenos HTML conectados por medio de hipervinculos
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ¿Cuáles son las partes de un URL?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                    
            
              Protodolo: http o https (mas seguro el https)<br />Subdominio.Dominio.Dominio-de-nivel-superior/subcarpeta/slag<br />Puerto
              (si no se tiene, este se asume)
          
              <ol>
                <li>.com</li>
                <li>.net</li>
                <li>.org</li>
                <li>.mx</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              
              ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH,
              DELETE?
              
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ol>
                <li>GET: Sirve para recuperar datos del servidor en solo lectura</li>
                <li>HEAD: Sirve para regresar solo el encavezado de un servidor</li>
                <li>
                  POST:Envia datos al servidor creando nuevos recursos, crea nueva id
                  manda los datos encriptados, se utilizan en formularios con informacion
                  sensible
                </li>
                <li>PUT:Actualiza recursos ya existentes en un servidor</li>
                <li>
                  PATCH:Actualiza los datos de un servidor, a diferencia del "PUT", este
                  solo ocupa los cambios especificos del recurso
                </li>
                <li>DELETE: Se utiliza para eliminar un recurso</li>
              </ol>

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              
              ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por
              ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?
              
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              
              POST, Este es mas seguro que utilizar un metodo GET ya que los datso no se
              muestran en la URL
              

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
             
              ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede
              a una página a través de un URL?
              
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              El metodo GET
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
             
              Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa
              esto? ¿Ocurrió algún error?
              
              
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              El servidor ha devuelto el resulado esperado
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             
              ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario
              reporta que intentó acceder al sitio y se encontró con un error 404? ¿Porqué?
              
              
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              En caso de que se haya cambiado la direccion del archivo, debe hacer que
              se pueda redireccionar a la pagina solicitada ya que tambien puede ser un dato que no exise.
                  
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
             
              ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario
              reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por
              qué?

            </button>
          </h2>
          <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Si, ya que este error indica que se cayó el sistema
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
             
              
              ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado
              (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén
              desaprobados.
              

            </button>
          </h2>
          <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              
              Son etiquetas que se recomiendan ya no usar ya que, aunque se les de
              mantenimiento, en algo de tiempo puede que ya no, fallando en la
              visualizacion de la pagina<br />
              Algunos de las etiquedas de HTML4 que en el HTML5 están desaprobadas:
              
              <ol>
                <li>applet</li>
                <li>acronym</li>
                <li>dir</li>
                <li>basefont</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
             
              ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?

            </button>
          </h2>
          <div id="collapseTen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              
              HML5 mejora muchos aspectos que eran dificiles u obsoletos de HTML4, en
              HTML5 se pueden hacer als cosas de manera nativa mientras que en HTML4
              depende de sistemas que llevan tiempo en desuso
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
             
              ¿Qué componentes de estructura y estilo tiene una tabla?

            </button>
          </h2>
          <div id="collapseTwelve" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              
              <strong>Componentes:</strong>
              table, tr (filas),td(columnas), th (encabezados), tb(cuerpo de la tabla)
              <strong>Estilos:</strong>
              border, padding, marging, background-color
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTirteen" aria-expanded="false" aria-controls="collapseTirteen">
             
              ¿Cuáles son los principales controles de una forma HTML5?

            </button>
          </h2>
          <div id="collapseTirteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ol>
                <li>&lt;form&gt;</form></li>
                <li>&lt;input&gt;</form></li>
                <li>&lt;textarea&gt;</form></li>
                <li>&lt;label&gt;</form></li>
                <li>&lt;fieldset&gt;</form></li>
          
              </ol>
    
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
             
              
              ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar
              la siguiente página para descubrirlo: http://html5test.com/ (Al responder
              la pregunta recuerda poner el navegador que utilizas)
              

            </button>
          </h2>
          <div id="collapseFourteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>La pagina qeu muestra en la pregunta no carga, pero segun https://caniuse.com/, la mayoria de las etiquetas tiene sopore para mi navegador (chrome)</p>
  
    
            </div>
          </div>
        </div>
        <h2>Sobre el ciclo de vida y desarrollo de los sistemas de información:</h2>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
              ¿Cuál es el ciclo de vida de los sistemas de información?
              

            </button>
          </h2>
          <div id="collapseEleven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <img src="https://www.tecnologias-informacion.com/ciclo.jpg" width="500px">
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
              ¿Cuál es el ciclo de desarrollo de sistemas de información?
              

            </button>
          </h2>
          <div id="collapseFifteen" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <img src="https://viewnext.com//wp-content/uploads/2018/06/7fases_SDLC_infografia.jpg" width="500px">
              
            </div>
          </div>
        </div>
      </div>
  


      <br />
      <h1> Preguntas Lab 2</h1>

      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             
            </div>
          </div>
        </div>
      </div>


      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Pregunta 1
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              !important es una regla de CSS que da prioridad a algun estilo ignorando la especificidad y cascada de CSS, este tiene que ser limitado y con justificacion ya que podría causar problemas de mantenibilidad y escalabilidad, si esta se llegara a utilizar, recomiendo que sea para evitar estilos de terceros (si se usan linbrerias o frameworks) y para algunas pruebas
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Pregunta 2
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
              Esto ya que a veces las imagenes pueden tener muchas trazos, haciendo ilegible el contenido del texto, talvez tambien para el rendimiento de la pagina ya que las de alta resolucion podrían afectar un poco, si la pagina se llegase a utilizar en celular, esta tendía que ser responsiba y porque algunas pueden tener derechos de autor
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
        Pregunta 3
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              % para tamaños flexibles y se ocupa responsividad en una pagina web, px cuando se ocupa precision, ya que esta es una unidad que no cambia respecto al tamaño de la pantalla y pt tengo entendido es mejor para diseñps de impresión, pt no escala correctamente en todos los dispositivos
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">
        Pregunta 4
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
        
              Como todo lenguaje de programacion, mientras menos lineas tenga, mas rapido cargará, entonces al evitar espacios o caracteres innecesarios, carga mas rapido, de igual manera se reduce el numero de peticiones al servidor mejorando el rendimiento     
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1> Material design</h1>
      <p>Es un estilo de diseño creado por Google que fue presentado en 2014, se enfoca en aspectos visuales y normativa que aplica en diferentes páginas web y plataformas, entiende la interaccion entre una persona y el dispositivo.</p>


      
      
      
      <p class="d-inline-flex gap-1">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Bibliografia
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <ol>
            <li>
              ¿Sabías que ”Internet” y “Web” no son lo mismo? (s. f.). EDteam - En
              Español Nadie Te Explica Mejor.
              <a href="https://ed.team/blog/sabias-que-internet-y-web-no-son-lo-mismo">https://ed.team/blog/sabias-que-internet-y-web-no-son-lo-mismo</a>
            </li>
            <li>
              Readers, C. H. A. C. B. |. T. R. B. (2021, 10 diciembre). What are GET,
              POST, PUT, PATCH, DELETE? A walkthrough with JavaScript’s Fetch API.
              Medium.
              <a href="https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28">https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28</a>
          
            </li>
            <li>  
              Canle Fernández, E. (2022, 2 marzo). ¿Cuáles son las etiquetas obsoletas
              en HTML5? ¡Actualízate! Tokio School. Recuperado 11 de febrero de 2025,
              de <a href="https://www.tokioschool.com/noticias/etiquetas-obsoletas-html5/">https://www.tokioschool.com/noticias/etiquetas-obsoletas-html5/</a> 
            </li>
            <li>
              Barron, B. (2021, 8 abril). HTML vs HTML5: Conoce las diferencias
              cruciales entre ellos. Kinsta®.
              <a href="https://kinsta.com/es/blog/html-vs-html5/#:~:text=Como%20ya%20se%20ha%20dicho,Java%20Web%20Start%20y%20Flash.">https://kinsta.com/es/blog/html-vs-html5/#:~:text=Como%20ya%20se%20ha%20dicho,Java%20Web%20Start%20y%20Flash.</a>
            </li>
            <li>
              Cascading Style Sheets (CSS). (2023). MDN Web Docs. Mozilla Foundation. Recuperado el 13 de febrero de 2025, de 
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">https://developer.mozilla.org/en-US/docs/Web/CSS</a>
            </li>



            <li>
              Sánchez, J. (2024, 22 agosto). Cómo elegir las imágenes para páginas web y tus post | Nuteco Web. nuteco - agencia de marketing digital. 
              <a href="https://www.nutecoweb.com/elegir-las-imagenes-tus-paginas-posts/#:~:text=Escoger%20im%C3%A1genes%20adecuadas%20es%20igual%20a%20contenido%20de%20calidad&text=Tendr%C3%A1s%20un%20buen%20texto%2C%20s%C3%AD,%C3%A9xito%20en%20tu%20sitio%20web.">https://www.nutecoweb.com/elegir-las-imagenes-tus-paginas-posts/#:~:text=Escoger%20im%C3%A1genes%20adecuadas%20es%20igual%20a%20contenido%20de%20calidad&text=Tendr%C3%A1s%20un%20buen%20texto%2C%20s%C3%AD,%C3%A9xito%20en%20tu%20sitio%20web.
            </li></a>
             

            <li>
              Bustos, J. L. (2024, 23 octubre). ¿Qué es el material design? | KeepCoding Bootcamps. KeepCoding Bootcamps. 
              <a href="https://keepcoding.io/blog/que-es-material-design/">https://keepcoding.io/blog/que-es-material-design/</a>
            </li>




            </li>
          </ol>
        </div>
      </div>
      


    </div>
    <footer >
      <!--Etiqueta para crear pie de página-->
      <table>
        <!--Crear tabla-->
        <thead>
          <!--Cabeza de la tabla-->
          <th scope="col">
            <table>
              Tipo de dato
            </table>
          </th>
          <th scope="col">
            <table>
              Dato personal
            </table>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>Nombre:</td>
            <td>Omar Emilio Casillas Alday</td>
          </tr>
          <tr>
            <td>Matricula:</td>
            <td>A01712114</td>
          </tr>
          <tr>
            <td>Correo de contacto:</td>
            <td>A01712114@tec.mx</td>
          </tr>
        </tbody>
      </table>
    </footer>
    <script src="introjs.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
`;
const sebas = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Oso</title>
</head>
<body>
    
    <header>
        <h1 class="card-panel center teal lighten-2">Hola me llamo Sebastian Osorio Arteaga <br> A01706119</h1>
        <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Logo</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#lab1">lab 1</a></li>
                <li><a href="#lab3">lab 3</a></li>
                <li><a href="#lab5">lab 5</a></li>
                <li><a href="#bibliografia">Bibliografia</a></li>
              </ul>
            </div>
          </nav>
        <p class="center">les voy a contar 15 cosas sobre mi y responder algunas preguntas</p>
    </header>
    
    <div class="container">
        <ul class="collapsible">
            <li>
                <div class="collapsible-header"><h2>15 cosas sobre mi</h2></div>
            <div class="collapsible-body">
                <ul>
                    <li class="collection-item">Me gusta el volleyball</li>
                    <li class="collection-item">Me gustan los videojeugos</li>
                    <li class="collection-item">Mi videojuego favorito es Metal Gear Solid 5</li>
                    <li class="collection-item">Mi pelicula favorita es Fantastic Mr.Fox</li>
                    <li class="collection-item">Nunca me ha dado varicela</li>
                    <li class="collection-item">No me gusta el sushi</li>
                    <li class="collection-item">Mi comida favorita es el pan frances</li>
                    <li class="collection-item">La unica mascota que he tenido ha sido una tortuga</li>
                    <li class="collection-item">No me he roto un hueso</li>
                    <li class="collection-item">Mi artista favorito es Frank Ocean</li>
                    <li class="collection-item">Me gusta leer, especialmente ciencia ficcion</li>
                    <li class="collection-item">Di clases de volleyball(como servicio social)</li>
                    <li class="collection-item">Me gusta hacer ejercicio</li>
                    <li class="collection-item">Soy una persona muy puntual y organizada</li>
                    <li class="collection-item">Soy una persona que disfruta de la calma y la tranquilidad.</li>
                </ul>
            </div>

            </li>
            
            
        </ul>

        <h2 id="lab1">Preguntas del lab 1</h2>
        <p class="pregunta"><b>¿Cuál es la diferencia entre Internet y la World Wide Web?</b></p>
        <p>Internet es una red de computadoras conectadas entre sí <br> y la World Wide Web hace uso del internet para mostrar un sistema conectado de paginas</p>

        <p class="pregunta"><b>¿Cuáles son las partes de un URL?</b></p>
        <p>protocolo, direccion, subcarpetas y slug</p>

        <p class="pregunta"><b>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</b></p>
        <p>son conjuntos de metodos de peticion para indicar la accion que se desea realizar para un recurso determinado <br>
        GET, las peticiones que usan GET solo deben recuperar datos <br>
        HEAD, hace lo mismo que el GET pero sin el cuerpo de la respuesta <br>
        POST, se utiliza para enviar una entidad a un recurso específico <br>
        PUT, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición <br>
        PATCH, es utilizado para aplicar modificaciones parciales a un recurso <br>
        DELETE, borra un recurso en especifico <br>
        </p>

        <p class="pregunta"><b>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</b></p>
        <p>Se debe usar un método POST</p>

        <p class="pregunta"><b>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</b></p>
        <p>Utiliza el método GET</p>

        <p class="pregunta"><b>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</b></p>
        <p>La solicitud del cliente fue exitosa</p>

        <p class="pregunta"><b>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</b></p>
        <p>si y no, ya que puede ser que ese sitio solo pueda ser accesado por un rol único</p>

        <p class="pregunta"><b>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</b></p>
        <p>Sí, ya que el error 500 indica un problema con el servidor</p>

        <p class="pregunta"><b>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</b></p>
        <p>Un elemento es deprecated, cuando su uso no es recomendable porque esos elementos podrían eliminarse en un futuro <br>
        <font> <basefont> son algunos elementos de HTML4 que en HTML5 están desaprobados
        </p>

        <p class="pregunta"><b>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</b></p>
        <p>HTML5 es la version más reciente de HTML y tiene mejoras en semantica y también soporta elementos multimedia </p>

        <p class="pregunta"><b>¿Qué componentes de estructura y estilo tiene una tabla?</b></p>
        <p> tr: Etiqueta que define las filas <br>
            td: Etiqueta que define las celdas de datos <br>
            th: Etiqueta que define las celdas de encabezados <br>
        <p>

            <p class="sincontestar"><b>¿Cuáles son los principales controles de una forma HTML5?</b></p>
            <p></p>

            <p class="pregunta"><b>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas)</b></p>
            <p>Chrome supongo que tiene un buen soporte, ya que en clase vimos que varios elementos estan soportados desde versiones muy viejas y la pagina de html5test ya no sirve</p>

            <p class="pregunta"><b>Sobre el ciclo de vida y desarrollo de los sistemas de información: <br>
                ¿Cuál es el ciclo de vida de los sistemas de información? <br>
                ¿Cuál es el ciclo de desarrollo de sistemas de información? <br>
                </b></p>
            <ul>
                <li>Planificación</li>
                <li>Análisis</li>
                <li>Diseño</li>
                <li>Implementación</li>
                <li>Pruebas</li>
                <li>Instalación/Despliegue</li>
                <li>Uso y mantenimiento</li>
            </ul>

            <h2 id="lab3">Preguntas del lab3</h2>

            <p class="pregunta"><b>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</b></p>
            <p>Creo que lo mejor sería evitarlo su uso lo más que se pueda, aunque son muy pocos los casos en los que se va a tener que usar !important para resolver el conflicto del estilo</p>

            <p class="pregunta"><b>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</b></p>
            <p>Se debe de escoger con cuidado por el tamaño "fisico", se debe de ver bien en diferentes tamaños de navegador y la imagen es muy pesada puede llegar a ralentizar el rendimiento del sitio web.</p>

            <p class="pregunta"><b>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</b></p>
            <p>Puedes priorizar el % si es que estas haciendo un sitio responsivo ya que se puede modificar en distintos casos y se va a ver parecido en varios casos y en cuanto a px y pt la recomendación sería usarlos si quieres algo preciso como en el tamaño del texto, la unidad del padding etc </p>

            <p class="pregunta"><b>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</b></p>
            <p>Porque reduce el tamaño del archivo, por lo que consume menos recursos entonces el tiempo de procesamiento es más rápido, asi dandole una mejor experiencia al usuario</p>

            <h2 id="lab5">Preguntas lab 5</h2>
            <p><strong>Describe Material design</strong></p>
            <p>Es un sistema creado por google que ayuda a crear experiencias digitales de alta calidad atraves del diseño, basandose en la palabra material, refiriendose a la definición de la palabra en sí, como también en sus texturas, luces y sombras. Llegando a reimaginar el tradicional tinta y papel</p>

            <div id="bibliografia">
                <h2 id="titlebiblio">Bibliografia</h2>
                <ul>
                    <li>Métodos de petición HTTP - HTTP | MDN. (2023, 24 julio). MDN Web Docs. <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods">https://developer.mozilla.org/es/docs/Web/HTTP/Methods</a></li>
                    <li>500 Internal Server Error - HTTP | MDN. (2023, 16 febrero). MDN Web Docs. <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Status/500">https://developer.mozilla.org/es/docs/Web/HTTP/Status/500</a></li>
                    <li>GeeksforGeeks. (2023, 4 agosto). HTML deprecated tags. GeeksforGeeks. <a href="https://www.geeksforgeeks.org/html-deprecated-tags/">https://www.geeksforgeeks.org/html-deprecated-tags/</a></li>
                    <li>HTML5 vs. HTML4: ¿Cuál es la diferencia? (s.f.). desarrolladoraweb.com. <a href="https://desarrolladoraweb.com/blog/html5-vs-html4-cual-es-la-diferencia">https://desarrolladoraweb.com/blog/html5-vs-html4-cual-es-la-diferencia</a></li>
                    <li>Conceptos básicos de las tablas HTML - Aprende desarrollo web | MDN. (s.f.). MDN Web Docs. <a href="https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics">https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics</a></li>
                    <li>Guerrero, A. C. (2015, 20 julio). Ciclo de vida de un sistema de información • gestiopolis. Gestiopolis. <a href="https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/">https://www.gestiopolis.com/ciclo-de-vida-de-un-sistema-de-informacion/</a></li>
                    <li>Material Design - Version 2. (s. f.). Material Design. <a href="https://m2.material.io/design/introduction#principles">https://m2.material.io/design/introduction#principles</a></li>
                    
                </ul>
            </div>
            
            
            


        <footer class="page-footer">se uso el IDE VisualStudioCode <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a></footer>
    </div>
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

</body>
</html>

`;

const importante = `
<!DOCTYPE html>
<html>
  <head>
    <title>Importante</title>
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
        background-image: url(https://i.pinimg.com/originals/e2/e7/b0/e2e7b0f7ad7ea7b06d58a322b5d8711a.gif);
      }

      #seccion {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      #Boton {
        background-color: #000000;
        padding: 30px;
        color: aliceblue;
        font-size: x-large;
        border: 5px solid #39ff14;
      }
    </style>
  </head>
  <body>
    <div id="seccion">
      <p id="Caliz"></p>
      <button
        id="Boton"
        type="button"
        onclick="window.open('https://www.tiktok.com/@scrigio10/video/7301747872503041313?q=Josh%20Hutcherson%20whistle&t=1728618480719', '_blank')"
      >
        ¡IMPORTANTE!
      </button>
    </div>
  </body>
</html>`;

router.get("/A01712114", (request, response, next) => {
  response.send(omar);
});

router.get("/A01706119", (request, response, next) => {
  response.send(sebas);
});
router.get("/importante", (request, response, next) => {
  response.send(importante);
});
module.exports = router;
