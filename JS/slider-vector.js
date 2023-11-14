const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideCount = slides.length;

function nextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slideCount;
  slides[currentIndex].classList.add('active');
}

// Cambiar automáticamente de diapositiva cada 5 segundos (ajusta el tiempo según tus preferencias)
setInterval(nextSlide, 5000); // 5 segundos