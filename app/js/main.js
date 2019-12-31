/* Smooth Scroll */

$(function() {
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data("scroll");
        let blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })
});


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
        prevArrow: '<img class="slider-arrow slider-arrow-left arrow-upper" src="img/header/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow-right arrow-upper" src="img/header/arrow-right.svg" alt=""></img>',
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


    /* Changing  viewBox on map*/
    let mapSvg = document.querySelector('.map-svg');

    if (document.body.clientWidth < 800) {
        mapSvg.setAttribute("viewBox", "0 40 860 500");
    }

    if (document.body.clientWidth < 400) {
        mapSvg.setAttribute("viewBox", "0 40 770 500");
    }


    /* Changing  coords on map text*/
    let northText = document.querySelector('.north-shore__text');

    if (document.body.clientWidth < 640) {
        northText.setAttribute("x", "382")
        northText.setAttribute("y", "260")
    }
});




/* SURF / SURF-SLIDER */

$(function(){

    $('.surf-list').slick({
        rows: 0,
        touchThreshold: 10,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '<img class="slider-arrow slider-arrow-left surf-arrow" src="img/header/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrow slider-arrow-right surf-arrow" src="img/header/arrow-right.svg" alt=""></img>',
    });

});

/* Sleep  */

$(document).ready(function() {
    let sleepPrice = 0;
    let sleepRate = 17.45;

    function setPrice() {
        sleepPrice = +$('.sleep-info__nights').val() * +$('.sleep-info__guests').val() * sleepRate;
        $('.sleep-info__price').html(sleepPrice.toFixed(2) + ' USD');
        return;
    }
    setPrice()

	$('.minus').click( function () {
		let $input = $(this).parent().siblings('input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();

        setPrice()
		return false;
	});
	$('.plus').click( function () {
		let $input = $(this).parent().siblings('input');
        if ($input.val() >= 9) return false; 
		$input.val(parseInt($input.val()) + 1);
		$input.change();

        setPrice()
		return false;
	});

});

/* Shop  */

let surfboardPoints = document.querySelectorAll('.surfboard__circle');

for (point of surfboardPoints) {
    let surfboardStrip = point.querySelector('.surfboard__strip:last-child');
    let surfboardContent = point.nextElementSibling;

    point.addEventListener("click", function() {
        surfboardStrip.classList.toggle('active');
        surfboardContent.classList.toggle('active');
    });
}





