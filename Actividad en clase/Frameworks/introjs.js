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
};
//SE UTILIZAN `` para escribir lo que va el 1 "linea" en varias (ejemplo anterior de la img)
boton.onclick = poner_imagen_1;
