document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const aboutText = document.querySelector(".about-text");
  const aboutImageContainer = document.querySelector(".about-image-container");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#c9b8d0";
    } else {
      navbar.style.backgroundColor = "#b6afc9ff";
    }

    // Trigger fade-in animation
    const windowHeight = window.innerHeight;
    const aboutTop = aboutText.getBoundingClientRect().top;

    if (aboutTop < windowHeight - 100) {
      aboutText.classList.add("visible");
      aboutImageContainer.classList.add("visible");
    }
  });

  // Smooth scrolling for nav links
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});