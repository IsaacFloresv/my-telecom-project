// Carousel functionality
let currentSlide = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Language Selector
function changeLanguage(language) {
  alert(`Language changed to: ${language}`);
  // Add functionality to update text based on the selected language.
}

// Load JSON file and update the content dynamically
async function changeLanguage(language) {
  try {
    const response = await fetch("languages.json");
    const data = await response.json();

    // Update text content based on the selected language
    document.querySelector("#about h1").textContent = data[language].aboutTitle;
    document.querySelector("#about p").textContent = data[language].aboutText;

    document.querySelector("#services h2").textContent = data[language].servicesTitle;
    const services = document.querySelectorAll(".service");
    services[0].querySelector("h3").textContent = data[language].service1;
    services[0].querySelector("p").textContent = data[language].service1Desc;
    services[1].querySelector("h3").textContent = data[language].service2;
    services[1].querySelector("p").textContent = data[language].service2Desc;
    services[2].querySelector("h3").textContent = data[language].service3;
    services[2].querySelector("p").textContent = data[language].service3Desc;
    services[3].querySelector("h3").textContent = data[language].service4;
    services[3].querySelector("p").textContent = data[language].service4Desc;

    document.querySelector("#projects h2").textContent = data[language].projectsTitle;
    const projectDescriptions = document.querySelectorAll(".carousel-item p");
    projectDescriptions[0].textContent = data[language].project1Desc;
    projectDescriptions[1].textContent = data[language].project2Desc;
    projectDescriptions[2].textContent = data[language].project3Desc;

    document.querySelector("#contact h2").textContent = data[language].contactTitle;
    const contactCard = document.querySelector(".contact-card");
    contactCard.innerHTML = `
      <p><strong>${data[language].phone}:</strong> +1 234 567 890</p>
      <p><strong>${data[language].email}:</strong> contact@telecommunications.com</p>
      <p><strong>${data[language].address}:</strong> 123 Telecom Street, Toronto, ON</p>
    `;
  } catch (error) {
    console.error("Error loading language file:", error);
  }
}
