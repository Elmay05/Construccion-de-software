//document es para jalar los datos del html
//jala los elementos por medio de un id del html
const boton = document.getElementById("boton_imagen");
console.log(boton);

const poner_imagen_1 = () => {
  const span_imagen = document.getElementById("imagen_chewy");
  //innerHTML propiedad para modificar html interno del DOM, SIRVE PARA USAR EL LENGUAJE DE HTML
  span_imagen.innerHTML = `<img alt="cheewbaca guapo"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgVp24TlNmDm2CaFYbBHLT0tAWoIRrUJPujBnNieQANku2V2XtR8kRLmyhn-_B-gxZmSNHHONU3XKwaj8-1HowsVWn-I3fmP3-7TPVoXKWra36PRJQGwr4lvukjNRARDlVw2dB30um6TFP/s1600/movies_star_wars_bts_pics_13.jpg"
        >`;
  boton.onclick = poner_imagen_2;
};
const poner_imagen_2 = () => {
  const span_imagen = document.getElementById("chewy_greñudo");
  //innerHTML propiedad para modificar html interno del DOM, SIRVE PARA USAR EL LENGUAJE DE HTML
  span_imagen.innerHTML = `<img alt="cheewbaca guapo"
            src="https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=336%2C0%2C864%2C864"
        >`;
  boton.onclick = poner_imagen_3;
};
const poner_imagen_3 = () => {
  const span_imagen = document.getElementById("chewy_3");
  //innerHTML propiedad para modificar html interno del DOM, SIRVE PARA USAR EL LENGUAJE DE HTML
  span_imagen.innerHTML = `<img alt="cheewbaca guapo"
              src="https://media.ambito.com/p/8f549ac26bc14ebb186664163c42ddff/adjuntos/239/imagenes/039/830/0039830414/chewbaccajpg.jpg"
            >`;
};
//SE UTILIZAN `` para escribir lo que va el 1 "linea" en varias (ejemplo anterior de la img)
boton.onclick = poner_imagen_1;
