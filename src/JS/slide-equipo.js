//=============== SWIPER JS ===============
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

const divs = document.querySelectorAll('.container_rs_card')
divs.forEach((div) => {
  let a_icon = Array.from(div.children)
  // Recorre cada enlace y añade la propiedad target="_blank"
  for (var i = 0; i < a_icon.length; i++) {
    a_icon[i].setAttribute("target", "_blank");
  }
})