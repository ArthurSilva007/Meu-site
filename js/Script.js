const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive'); // Seleciona o menu de navegação

// Adiciona o evento de clique no menu hamburguer
menuHamburguer.addEventListener('click', () => {
    toggleMenu(); // Chama a função para alternar o menu
});

/**
 * Alterna a visibilidade do menu e transforma o ícone do hambúrguer.
 */
function toggleMenu() {
    // Alterna a classe "change" no hambúrguer (transforma o ícone)
    menuHamburguer.classList.toggle('change');
    
    // Alterna a classe "active" no menu de navegação (exibe/oculta o menu)
    nav.classList.toggle('active'); // Mostra ou oculta o menu
}
/******  49de083e-0356-4ac6-a8c9-851d8b2f28b3  *******/