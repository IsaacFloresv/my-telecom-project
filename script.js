// Carousel functionality
let currentSlide = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}


// Languages
let translations = {};

// Cargar el archivo JSON de idiomas
fetch("languages.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error loading translations");
    }
    return response.json();
  })
  .then((data) => {
    translations = data;
  })
  .catch((error) => {
    console.error("Error loading language file:", error);
  });

// Función para cambiar el idioma
function changeLanguage() {
  const language = document.getElementById("language-switcher").value;

  // Verifica si las traducciones para el idioma seleccionado existen
  if (!translations[language]) {
    console.error(`Translations for '${language}' not found.`);
    return;
  }

  const data = translations[language];

  // Actualiza el contenido de las secciones
  document.querySelector("#about h1").textContent = data.aboutTitle;
  document.querySelector("#about p").textContent = data.aboutText;

  document.querySelector("#services h2").textContent = data.servicesTitle;

  const services = document.querySelectorAll(".service");
  services[0].querySelector("h3").textContent = data.service1;
  services[0].querySelector("p").textContent = data.service1Desc;

  services[1].querySelector("h3").textContent = data.service2;
  services[1].querySelector("p").textContent = data.service2Desc;

  services[2].querySelector("h3").textContent = data.service3;
  services[2].querySelector("p").textContent = data.service3Desc;

  services[3].querySelector("h3").textContent = data.service4;
  services[3].querySelector("p").textContent = data.service4Desc;

  document.querySelector("#projects h2").textContent = data.projectsTitle;

  const projects = document.querySelectorAll(".carousel-item p");
  projects[0].textContent = data.project1Desc;
  projects[1].textContent = data.project2Desc;
  projects[2].textContent = data.project3Desc;

  document.querySelector("#contact h2").textContent = data.contactTitle;
  const contactCard = document.querySelector(".contact-card");
  contactCard.innerHTML = `
    <p><strong>${data.phone}:</strong> +1 234 567 890</p>
    <p><strong>${data.email}:</strong> contact@telecommunications.com</p>
    <p><strong>${data.address}:</strong> 123 Telecom Street, Toronto, ON</p>
  `;
}

// Agrega un listener para cargar el idioma predeterminado al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  const defaultLanguage = "en"; // Cambia este valor si deseas otro idioma predeterminado
  document.getElementById("language-switcher").value = defaultLanguage;
  changeLanguage();
});
