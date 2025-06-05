const flashcards = [
  { front: "O que é mitose?", back: "Divisão celular que gera duas células-filhas geneticamente idênticas à célula-mãe." },
  { front: "Qual a fórmula da área do triângulo?", back: "A = (base × altura) / 2" },
  { front: "Função do ribossomo?", back: "Síntese de proteínas." },
  { front: "Quem escreveu 'Vidas Secas'?", back: "Graciliano Ramos." },
  { front: "Qual a capital do Acre?", back: "Rio Branco." },
  { front: "O que foi o Iluminismo?", back: "Movimento intelectual do século XVIII que valorizava a razão, ciência e liberdade." },
  { front: "Defina entalpia (∆H)", back: "Variação de calor em uma reação a pressão constante." },
  { front: "Qual a fórmula da velocidade média?", back: "Vm = ΔS / Δt" },
  { front: "O que é um texto dissertativo-argumentativo?", back: "Tipo textual que defende um ponto de vista com argumentos e conclusão." },
  { front: "Quando ocorreu a Proclamação da República no Brasil?", back: "15 de novembro de 1889." }
];

const flashcardEl = document.getElementById("flashcard");
const frontTextEl = document.getElementById("front-text");
const backTextEl = document.getElementById("back-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const flipBtn = document.getElementById("flip-btn");
const progressEl = document.getElementById("progress");

let currentIndex = 0;
let flipped = false;

function updateFlashcard() {
  const card = flashcards[currentIndex];
  frontTextEl.textContent = card.front;
  backTextEl.textContent = card.back;
  flipped = false;
  flashcardEl.classList.remove("flipped");
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === flashcards.length - 1;
  progressEl.textContent = `Flashcard ${currentIndex + 1} de ${flashcards.length}`;
  localStorage.setItem("flashIndex", currentIndex);
}

flipBtn.onclick = () => {
  flipped = !flipped;
  flashcardEl.classList.toggle("flipped", flipped);
};
prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateFlashcard();
  }
};
nextBtn.onclick = () => {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    updateFlashcard();
  }
};
flashcardEl.onclick = flipBtn.onclick;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevBtn.click();
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    flipBtn.click();
  }
});

function init() {
  const savedIndex = localStorage.getItem("flashIndex");
  if (savedIndex !== null) currentIndex = parseInt(savedIndex, 10);
  updateFlashcard();
}

init();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("✅ Service Worker registrado"))
    .catch((e) => console.error("❌ Falha ao registrar SW:", e));
}
