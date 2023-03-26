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