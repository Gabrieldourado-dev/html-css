// Efeito de digitação no Hero
const typingElement = document.getElementById("typing");
const words = ["Front-End Developer", "Web Designer", "Criador de Experiências Digitais"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];
  typingElement.textContent = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}
typeEffect();

// Validação de formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msgSucesso").classList.remove("hidden");
  this.reset();
});

// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
