const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

// Adiciona o evento de clique no menu hambúrguer
menuHamburguer.addEventListener('click', toggleMenu);

/**
 * Alterna o menu e a exibição do hambúrguer.
 */
function toggleMenu() {
    // Alterna a classe "change" no hambúrguer (transforma o ícone)
    menuHamburguer.classList.toggle('change');
    
    // Alterna a classe "active" no menu de navegação (exibe/oculta o menu)
    nav.classList.toggle('active'); // Mostra ou oculta o menu
}
/******  49de083e-0356-4ac6-a8c9-851d8b2f28b3  *******/