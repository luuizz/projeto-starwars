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

// Ativar as abas da página de plataforma

function openTab(evt, tabName) {
  var i, tabcontent, tablinks1;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks1 = document.getElementsByClassName("tablinks-1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}


// Menu responsivo

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

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