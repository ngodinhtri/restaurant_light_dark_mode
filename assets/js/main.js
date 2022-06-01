// ------- toggle menu -----------
const showMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if (!(toggle && menu)) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    })
}

showMenu('nav__toggle', 'nav__menu');

//  ------- remove menu -----------
const navLinks = [...document.getElementsByClassName('nav__link')];

const removeMenu = () => {
    const menu = document.getElementById('nav__menu');

    if (menu) {
        menu.classList.remove('show');
    }
}

navLinks.forEach(element => element.addEventListener('click', removeMenu));