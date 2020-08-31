/* ===== MENU SHOW ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

/* ===== REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    //active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove Menu Mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== Sticky ===== */
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})