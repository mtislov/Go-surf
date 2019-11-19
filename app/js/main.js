/* DATE */
let date = new Date();
document.querySelector('.date__day').textContent = date.getDate();
document.querySelector('.date__month').textContent = date.getMonth() + 1;
document.querySelector('.date__year').textContent = date.getFullYear();


/* HEADER */

$(function(){

    $('.header__slider').slick({
        asNavFor: '.slider-dots',
        infinite: true,
        fade: true,
        rows: 0,
        swipe: false,  
        prevArrow: '<img class="slider-arrow slider-arrow-left" src="img/header/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow-right" src="img/header/arrow-right.svg" alt=""></img>',
    });

    $('.slider-dots').slick({
        rows: 0,
        swipe: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        focusOnSelect: true,
        
    });

    $('.slider-arrow-bottom').on('click', function() {
        $('.header__slider').slick('slickNext');
    });
  



    let northLine = document.getElementById('north-line');
    let westLine = document.getElementById('west-line');
    let eastLine = document.getElementById('east-line');
    let southLine = document.getElementById('south-line');

    let linesArr = [northLine, westLine, eastLine, southLine];

    let animateClass = 'map__line--animation';


    $('.header__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        let beforeLine = linesArr[currentSlide];
        let currentLine = linesArr[nextSlide];

        currentLine.classList.add(animateClass);
        beforeLine.classList.remove(animateClass);
    });
    
});


/* SURF */

$(function(){

    $('.surf-list').slick({

    });
    
});