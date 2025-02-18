alert("Esta es mi primer pagina");
const boton = document.getElementById("bib");
const biblio = () => {
  const bibliografia = document.getElementById("biblio");
  bibliografia.innerHTML = `  
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
          
          </li>"
        </ol>`;
  boton.onclick = biblio2;
};

const biblio2 = () => {
  const bibliografia = document.getElementById("biblio");
  bibliografia.innerHTML = `  `;
  boton.onclick = biblio;
};
boton.onclick = biblio;
