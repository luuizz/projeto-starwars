// Swiper seção de mapas

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 24,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 2.8,
      },
      1200: {
        slidesPerView: 3.5,
      },
    }
    });


// Swiper seção de seleção de personagens

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  grabCursor: false,
  watchSlidesProgress: true,
});


var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});