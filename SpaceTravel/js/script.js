$(function(){
    $('.slider__box').slick({
        prevArrow: '<img src="img/arrow-left.svg" alt="arrow" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="img/arrow-right.svg" alt="arrow" class="slider__arrow slider__arrow-right">',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.header__menu-list').toggleClass('active')
    });
});