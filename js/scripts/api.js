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