// Transições entre páginas
/*


function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
      setTimeout(() => {
          done();
      }, n);
  });
}

function pageTransition() {
  
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
      duration: 1,
      width: "100%",
      left: "100%",
      ease: "Expo.easeInOut",
      delay: 0.3,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
  barba.init({
      sync: true,
    
      transitions: [
          {
              async leave(data) {
                  const done = this.async();

                  pageTransition();
                  await delay(1000);
                  done();
              },

              async enter(data) {
                  contentAnimation();
              },

              async once(data) {
                  contentAnimation();
              },
          },
      ],
  });
});

*/


// Swiper seção de mapas

var swiper = new Swiper(".slide-maps", {
    slidesPerView: 2.5,
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
        slidesPerView: 2.5,
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