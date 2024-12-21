// Función para cambiar el idioma
document.getElementById('language-button').addEventListener('click', function() {
  const languageList = document.getElementById('language-list');
  languageList.classList.toggle('hidden');
});

document.querySelectorAll('#language-list a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  fetch('languages.json')
    .then(response => response.json())
    .then(data => {
      const languageData = data[lang];
      
      document.querySelector('title').textContent = languageData.title;
      
      console.log(languageData.navbar.projects)
      document.querySelector('#nvabout').textContent = languageData.navbar.about;
      document.querySelector('#nvservices').textContent = languageData.navbar.services;
      document.querySelector('#nvprojects').textContent = languageData.navbar.projects;
      document.querySelector('#nvcontact').textContent = languageData.navbar.contact;
      

     document.querySelector('#about h1').textContent = languageData.about.heading;
      document.querySelector('#about p').textContent = languageData.about.description;
      document.querySelector('#services h2').textContent = languageData.services.heading;
      
      const services = document.querySelectorAll('.service');
      services[0].querySelector('h3').textContent = languageData.services.securityCamera.title;
      services[0].querySelector('p').textContent = languageData.services.securityCamera.description;
      
      services[1].querySelector('h3').textContent = languageData.services.starlink.title;
      services[1].querySelector('p').textContent = languageData.services.starlink.description;
      
      services[2].querySelector('h3').textContent = languageData.services.wirelessNetworks.title;
      services[2].querySelector('p').textContent = languageData.services.wirelessNetworks.description;
      
      services[3].querySelector('h3').textContent = languageData.services.audioVideo.title;
      services[3].querySelector('p').textContent = languageData.services.audioVideo.description;
      
      document.querySelector('#projects h2').textContent = languageData.projects.heading;
      document.querySelectorAll('.carousel-item p')[0].textContent = languageData.projects.project1.description;
      document.querySelectorAll('.carousel-item p')[1].textContent = languageData.projects.project2.description;
      document.querySelectorAll('.carousel-item p')[2].textContent = languageData.projects.project3.description;
      
      document.querySelector('#contact h2').textContent = languageData.contact.heading;
      document.querySelector('.contact-card').innerHTML = `
        <p><strong>${languageData.contact.phoneLabel}</strong> ${languageData.contact.phone}</p>
        <p><strong>${languageData.contact.emailLabel}</strong> ${languageData.contact.email}</p>
        <p><strong>${languageData.contact.addressLabel}</strong> ${languageData.contact.address}</p>
      `;
    })
    .catch(error => console.error('Error loading language file:', error));
}
