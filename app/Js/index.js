const menubtn = document.querySelector('.menu_burger');
const hamburger = document.querySelector('.menu_burger_item');

const nav = document.querySelector('.menu_nav');
const menuLinks = document.querySelector('.menu_links');
let menu = false;

menubtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!menu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menu = true;
    }
    else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menu = false;
    }
}