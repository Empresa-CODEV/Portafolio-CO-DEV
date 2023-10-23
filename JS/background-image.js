var header = document.querySelector('.header-carousel');
var carousel = document.getElementById('carouselAutoplaying');

// Se le agrega un evento el cual se va a ejecutar cuando el carrusel cambie de diapositiva. 
carousel.addEventListener('slid.bs.carousel', function(event) {
  // Obtiene el indice de la diapositiva la cual este activa luego de que se haya completado la transicion.
  var activeSlideIndex = event.to; 
  // Se define un array con rutas de imagenes las cuales se utilizaran para el fondo de la seccion de Inicio cordinados con el carrusel.
  var imagePaths = [
    'img/Img-Inicio-1.jpg',
    'img/Img-Inicio-2.jpg',
    'img/Img-Inicio-3.jpg'
  ];
  // Cambia el fondo del elemento con la clase definida ".header-carousel" al fondo correspondiente con la diapositiva activa.
  header.style.backgroundImage = 'url(' + imagePaths[activeSlideIndex] + ')';
});