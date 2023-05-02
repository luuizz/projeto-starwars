// Menu responsivo

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

// Inicializar AOS

AOS.init({
   duration: 1000,
   once: true,
});