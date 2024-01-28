window.onload = () => {
    const navMenu = document.querySelector('nav-menu');
    const navItem = document.querySelector('nav-item');
    const hambuger = document.querySelector('nav-toggle');

    const toggle = e => e.classList.toggle('is-active');
    const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

    hambuger.addEventListener('click', () => toggle(navMenu, 'is-active'));
    Array.from(navItem).forEach(e => e.addEventListener('click', toggleNav));
}


