var i=document.querySelector(".header-carousel");// Se le agrega un evento el cual se va a ejecutar cuando el carrusel cambie de diapositiva. 
document.getElementById("carouselAutoplaying").addEventListener("slid.bs.carousel",function(e){// Obtiene el indice de la diapositiva la cual este activa luego de que se haya completado la transicion.
var o=e.to;// Cambia el fondo del elemento con la clase definida ".header-carousel" al fondo correspondiente con la diapositiva activa.
i.style.backgroundImage="url("+["../img/Inicio/Img-Inicio-1.jpg","../img/Inicio/Img-Inicio-2.jpg","../img/Inicio/Img-Inicio-3.jpg"][o]+")"});//# sourceMappingURL=index.94a54eb6.js.map

//# sourceMappingURL=index.94a54eb6.js.map
