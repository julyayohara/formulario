function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function mostrarConteudo(id) {
    const secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(secao => {
        secao.classList.remove('mostrar');
        secao.style.display = 'none';
    });

    const secaoAtiva = document.getElementById(id);
    secaoAtiva.style.display = 'block';
    // Garante que o opacity funcione após o display:block
    setTimeout(() => secaoAtiva.classList.add('mostrar'), 10);
}
