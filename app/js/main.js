$(function(){

    $('.header__slider').slick({
        asNavFor: '.slider-dots',
        infinite: true,
        fade: true,
        rows: 0,
        prevArrow: '<img class="slider-arrow slider-arrow-left" src="img/header/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow-right" src="img/header/arrow-right.svg" alt=""></img>',
    });

    $('.slider-dots').slick({
        rows: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

  
});