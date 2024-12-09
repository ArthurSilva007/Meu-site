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

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover classe 'active' de todos os botões e conteúdos
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
  
        // Adicionar classe 'active' ao botão e conteúdo correspondente
        button.classList.add('active');
        const tab = button.getAttribute('data-tab');
        document.getElementById(tab).classList.add('active');
      });
    });
  });