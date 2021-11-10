$(document).ready(function() {
    $('.menu__btn-burger').click(function(event) {
        $('.menu__btn-burger,.header__menu').toggleClass('active');
    })
});

$('.team__slider').slick({
    slidesToShow: 1,
    slidesToScrol: 1,
    dots: true,
    arrows: false,
});

$('.testimonials__slider').slick({
    slidesToShow: 1,
    slidesToScrol: 1,
    dots: true,
    arrows: false,
});

$('.latest__slider').slick({
    slidesToShow: 1,
    slidesToScrol: 1,
    dots: true,
    arrows: false,
});

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
