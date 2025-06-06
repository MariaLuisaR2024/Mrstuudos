function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    localStorage.setItem('usuario', JSON.stringify({ email }));
    window.location.href = './materias/flashcards.html';
  } else {
    alert("Preencha todos os campos!");
  }
}

