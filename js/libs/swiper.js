// Swiper seção de mapas

var swiper = new Swiper(".slide-maps", {
    slidesPerView: 2,
    spaceBetween: 32,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 2,
      },
    }
  });

  // Swiper seção de seleção de personagens

var swiper = new Swiper(".mySwiper5", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
  
  // Swiper da página de mídia
  
  var swiper = new Swiper(".slide-midia", {
    slidesPerView: 2,
    spaceBetween: 32,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      560: {
        slidesPerView: 1.1,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 1.2,
      },
      991: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 2,
      },
      2400: {
        slidesPerView: 2.1,
        spaceBetween: 64,
      },
    }
  });