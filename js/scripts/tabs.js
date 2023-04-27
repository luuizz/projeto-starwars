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

// Abas na página de personagens

function abrirAbas(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    if (!evt || tablinks[i] !== evt.currentTarget) {
      tablinks[i].classList.remove("active");
    }
  }
  document.getElementById(tabName).classList.add("active");
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add("active");
  }
}

document.querySelector('.tablinks').classList.add('active');
document.querySelector('.tabcontent').classList.add('active');