// Select DOM items
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menu.classList.add('show');
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        // change state
        showMenu = true;

        // else remove 
    } else {
        menu.classList.remove('show');
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        // change state
        showMenu = false;
    }
}