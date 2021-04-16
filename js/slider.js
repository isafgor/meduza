$(document).ready(function(){
    $('.slider').bxSlider();
});


// $('.slider').bxSlider({
//     mode: 'horizontal',
//     autoDirection: 'next',
//     minSlides: 3,
//     maxSlides: 3,
//     slideWidth: 480,
//     // slideMargin: 10,
//     ticker: true,
//     speed: 25000
// });

$('.slider').bxSlider({
    pager: false,
    nextText: '<img src="img/right-arrow.svg"/>',
    prevText: '<img src="img/left-arrow.svg"/>',
    controls: true,
    maxSlides: 1,
    minSlides: 1,
    nextSelector: '.bx-next',
    prevSelector: '.bx-prev',
    slideWidth: 635,
    slideMargin: 100,
});

$('.mb-slider').bxSlider({
    pager: false,
    nextText: '<img src="img/right-arrow.svg"/>',
    prevText: '<img src="img/left-arrow.svg"/>',
    controls: true,
    maxSlides: 1,
    minSlides: 1,
    nextSelector: '.bxx-next',
    prevSelector: '.bxx-prev',
    slideWidth: 300,
    slideMargin: 100,
});
