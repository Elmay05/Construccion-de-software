let correos = ["ejemplo@gmail.com", "ejemplo1@gmail.com", "ejemplo2@gmail.com"];
let contraseñas = [1234, 5678, 9123];
const email = document.getElementById("email");
const contraseña = document.getElementById("password");
const conte = document.getElementById("container");
function comprueba(event) {
  //evita que la pagina carge al enviar formulario
  event.preventDefault();
  //value sirve para obtener campo de entrada (en este caso el correo)
  const emailValue = email.value;
  const contraseñaValue = contraseña.value;

  for (let i = 0; i < correos.length; i++) {
    if (correos[i] == emailValue && contraseñas[i] == contraseñaValue) {
      alert("Inicio de sesión exitoso");
      setTimeout(() => {
        container.style.display = "none";
        document
          .getElementById("preguntas")
          .classList.remove("preguntashidden");
      }, 100); //Espera 100 milisegundos

      return;
    }
  }
  document.getElementById("mensajedeerror").classList.remove("hidden");
}
//Captura formulario y agrega el evento de envio
const form = document.getElementById("formulario");
form.addEventListener("submit", comprueba);

function fuera(x) {
  x.style.boxShadow = "2px 3px 5px #000000";
  x.style.color = "#3d3f60";
}

function presiona(x) {
  x.style.boxShadow = "0px 0px 1px #000000";
  x.style.color = "#000000";
}

function mensajecontra() {
  let mensaje = document.createElement("p");
  mensaje.id = "ayudaPassword";
  mensaje.textContent = "Contraseña caso de prueva: 1234";
  mensaje.style.color = "white";
  mensaje.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  mensaje.style.padding = "5px";
  mensaje.style.borderRadius = "5px";
  mensaje.style.position = "absolute";
  mensaje.style.marginTop = "5px";
  this.parentNode.appendChild(mensaje);
}

function mensajeemail() {
  let mensaje = document.createElement("p");
  mensaje.id = "ayudaEmail";
  mensaje.textContent = "Email caso de prueva: ejemplo@gmail.com";
  mensaje.style.color = "white";
  mensaje.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  mensaje.style.padding = "5px";
  mensaje.style.borderRadius = "5px";
  mensaje.style.position = "absolute";
  mensaje.style.marginTop = "5px";
  this.parentNode.appendChild(mensaje);
}

// CAMBIO DE ESTILO Y MENSAJES DINÁMICOS

// 🔹 Mostrar un mensaje de ayuda cuando el usuario coloca el mouse sobre el campo de contraseña
contraseña.addEventListener("mouseover", mensajecontra);
email.addEventListener("mouseover", mensajeemail);
// ❌ Ocultar mensaje cuando el usuario quita el mouse
contraseña.addEventListener("mouseout", function () {
  let mensaje = document.getElementById("ayudaPassword");
  if (mensaje) mensaje.remove();
});

email.addEventListener("mouseout", function () {
  let mensaje = document.getElementById("ayudaEmail");
  if (mensaje) mensaje.remove();
});
