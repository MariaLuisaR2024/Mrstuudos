document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("flashcard-container");

  fetch("biologia.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(card => {
        const div = document.createElement("div");
        div.className = "flashcard";
        div.innerHTML = `
          <div class="front">${card.pergunta}</div>
          <div class="back">${card.resposta}</div>
        `;
        container.appendChild(div);
      });
    });
});
document.addEventListener("click", (e) => {
  if (e.target.closest(".flashcard")) {
    e.target.closest(".flashcard").classList.toggle("clicked");
  }
});
