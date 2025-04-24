function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  function mostrarDisciplina(disciplina) {
    const secoes = document.querySelectorAll(".disciplina");
    secoes.forEach(secao => secao.style.display = "none");
    document.getElementById(disciplina).style.display = "block";
  }
