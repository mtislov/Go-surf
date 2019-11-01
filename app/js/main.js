$(function(){

    $('.header__slider').slick({
        asNavFor: '.slider-dots',
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow-left" src="img/header/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow-right" src="img/header/arrow-right.svg" alt=""></img>',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

  
});