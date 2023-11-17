const slides = document.querySelectorAll('.slide-sb');
let currentIndex = 0;
const slideCount = slides.length;

function nextSlide() {
  slides[currentIndex].classList.remove('active-sb');
  currentIndex = (currentIndex + 1) % slideCount;
  slides[currentIndex].classList.add('active-sb');
}

// Cambiar automáticamente de diapositiva cada 5 segundos (ajusta el tiempo según tus preferencias)
setInterval(nextSlide, 5000); // 5 segundos