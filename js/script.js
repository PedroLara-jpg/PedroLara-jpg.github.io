const typingElement = document.getElementById("typing");
const words = ["desenvolvedor web", "frontend developer", "criador de interfaces"]; 
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = word.substring(0, charIndex++);
    if (charIndex > word.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingElement.textContent = word.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  const speed = deleting ? 50 : 80;
  setTimeout(typeEffect, speed);
}

typeEffect();

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;



if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  html.setAttribute("data-theme", "light");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
});
