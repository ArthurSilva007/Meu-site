const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive'); // Seleciona o menu de navegação

// Adiciona o evento de clique no menu hambúrguer
menuHamburguer.addEventListener('click', () => {
    toggleMenu(); // Chama a função para alternar a classe e o menu
});

/*************  ✨ Codeium Command 🌟  *************/
/**
 * Alterna o menu hamburguer para um X e vice-versa.
 */
function toggleMenu() {
    // Alterna a classe "change" no menu hambúrguer
    menuHamburguer.classList.toggle('change');
    
    // Alterna a visibilidade do menu
    nav.classList.toggle('active'); // Adiciona ou remove a classe "active"
}
/******  49de083e-0356-4ac6-a8c9-851d8b2f28b3  *******/