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

// Swiper da página de mídia

var swiper = new Swiper(".slide-midia", {
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

// Integração da API

// var xhr = new XMLHttpRequest();

// var resultado = null;

// xhr.open('GET', 'https://swapi.dev/api/people/1');
// xhr.send();

// // const naves = document.querySelectorAll('#starships');
// // const genero = document.querySelectorAll('#gender');
// // const veiculos = document.querySelectorAll('#vehicles');
// // const armas = document.querySelectorAll('#weapons');


// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     resultado = JSON.parse(xhr.response);
//     console.log(resultado);
//   }
// }

// var genero = resultado[0].gender;

// APi Luke
// let baseUrl = 'https://swapi.dev/api/people/44/';
// let genero = document.getElementById('gender');
// let corCabelo = document.getElementById('skin-color');
// let anoNascimento = document.getElementById('ano-nascimento');
// let altura = document.getElementById('altura');

// fetch(baseUrl).then(response => response.json())
// .then(json =>{
//   console.log(json)
//   genero.innerHTML = `${json.gender}`
//   corCabelo.innerHTML = `${json.hair_color}`
//   anoNascimento.innerHTML = `${json.birth_year}`
//   altura.innerHTML = `${json.height}`
// })

fetch('https://swapi.dev/api/people/1/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-luke').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-luke').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-luke').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-luke').querySelector('#altura');
    alturaElement.textContent = data.height;
  });

  fetch('https://swapi.dev/api/people/5/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-leia').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-leia').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-leia').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-leia').querySelector('#altura');
    alturaElement.textContent = data.height;
  });

  fetch('https://swapi.dev/api/people/14/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-han').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-han').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-han').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-han').querySelector('#altura');
    alturaElement.textContent = data.height;
  });

  fetch('https://swapi.dev/api/people/22/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-boba').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-boba').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-boba').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-boba').querySelector('#altura');
    alturaElement.textContent = data.height;
  });

  fetch('https://swapi.dev/api/people/4/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-vader').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-vader').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-vader').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-vader').querySelector('#altura');
    alturaElement.textContent = data.height;
  });

  fetch('https://swapi.dev/api/people/10/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-kylo').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-kylo').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-kylo').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-kylo').querySelector('#altura');
    alturaElement.textContent = data.height;
  });

  fetch('https://swapi.dev/api/people/20/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-yoda').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-yoda').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-yoda').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-yoda').querySelector('#altura');
    alturaElement.textContent = data.height;
  });

  fetch('https://swapi.dev/api/people/44/')
  .then(response => response.json())
  .then(data => {
    const genderElement = document.getElementById('slide-maul').querySelector('#gender');
    genderElement.textContent = data.gender;

    const cabeloElement = document.getElementById('slide-maul').querySelector('#skin-color');
    cabeloElement.textContent = data.hair_color;

    const anoElement = document.getElementById('slide-maul').querySelector('#ano-nascimento');
    anoElement.textContent = data.birth_year;

    const alturaElement = document.getElementById('slide-maul').querySelector('#altura');
    alturaElement.textContent = data.height;
  });