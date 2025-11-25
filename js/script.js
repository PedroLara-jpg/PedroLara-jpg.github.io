
const element = document.getElementById("typing");
const palavras = ["desenvolvedor web", "frontend developer", "criador de interfaces"];
let palavraIndex = 0;
let charIndex = 0;
let apagando = false;

function type() {
  const palavra = palavras[palavraIndex];

  if (!apagando) {
    element.textContent = palavra.substring(0, charIndex++);
    if (charIndex > palavra.length) {
      apagando = true;
      setTimeout(type, 1200); 
      return;
    }
  } else {
    element.textContent = palavra.substring(0, charIndex--);
    if (charIndex < 0) {
      apagando = false;
      palavraIndex = (palavraIndex + 1) % palavras.length;
    }
  }

  const velocidade = apagando ? 50 : 80;
  setTimeout(type, velocidade);
}

type();

