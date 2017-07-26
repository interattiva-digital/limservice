$(document).ready(() => {
    let $slider = $('.lim-portfolio__slider').slick({
        arrows: false,
        infinite: true,
        draggable: true
    });

    let $sliderCounter = $('.lim-portfolio__slider-counter');

    $sliderCounter.on('click', (e) => {
        $slider.slick('next');
    });

    $slider.on('afterChange', (e, slick, currentSlide) => {
        $sliderCounter.html(`<span>${currentSlide + 1}/${slick.$slides.length}</span>`);
    });
});