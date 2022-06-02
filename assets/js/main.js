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

//  ------- showScrollTop -----------
function showScrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // console.log(window.scrollY);

    if (!scrollTop) return;

    if (this.scrollY >= 560) scrollTop.classList.add('show');
    else scrollTop.classList.remove('show');
}

window.addEventListener('scroll', showScrollTop);

//  ------- change theme -----------
const changeTheme = () => {
    const toggleTheme = document.getElementById('toggle-theme');
    const iconDark = document.querySelector('#toggle-theme i[data-dark]');
    const iconLight = document.querySelector('#toggle-theme i[data-light]');

    if (!toggleTheme && iconDark && iconLight) return;

    toggleTheme.addEventListener('click', () => {
        iconLight.classList.toggle('active');
        iconDark.classList.toggle('active');
        document.body.classList.toggle('dark-theme');
    })
}

changeTheme();

//  ------- scroll reveal js -----------
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__item, .menu__item,
            .app__img, .app__data,
            contact__data, .contact__btn, .footer__item`, {
    interval: 200
});