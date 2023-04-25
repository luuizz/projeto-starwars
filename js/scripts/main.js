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