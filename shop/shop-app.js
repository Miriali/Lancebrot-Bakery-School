//Variables
const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');

const navLeft = menu.getBoundingClientRect().left;

//Toggle Navbar
navOpen.addEventListener('click', () => {
    if(navLeft < 0){
        menu.classList.add('show');
    }
});

navClose.addEventListener('click', () => {
    if(navLeft < 0){
        menu.classList.remove('show');
    }
});

//Fixed Nav
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        nav.classList.add("fix-nav");
    } else {
        nav.classList.remove('fix-nav');
    }
});

//Aos
AOS.init();