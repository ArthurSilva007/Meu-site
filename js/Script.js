/* === Turns the menu hamburger into a X === */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu(); 
});

/*************  ✨ Codeium Command 🌟  *************/
/**
 * Toggle the menu hamburger to a X and vice versa.
 * @param {MouseEvent} event - The click event.
 */
function toggleMenu(event) {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    // If the menu hamburger is currently a X, show the nav menu.
    // Otherwise, hide it.
    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none'
    } 
}
/******  49de083e-0356-4ac6-a8c9-851d8b2f28b3  *******/