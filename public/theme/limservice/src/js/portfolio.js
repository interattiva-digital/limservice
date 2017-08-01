$(document).ready(() => {
    let $slider = $('.lim-portfolio__slider').slick({
        arrows: false,
        infinite: true,
        draggable: true,
        lazyLoad: 'ondemand'
    });

    let $sliderCounter = $('.lim-portfolio__slider-counter');

    $sliderCounter.on('click', (e) => {
        $(e.currentTarget).siblings('.lim-portfolio__slider').slick('next');
    });

    $slider.on('click', (e) => {
        $(e.currentTarget).slick('next');
    });

    $slider.on('afterChange', (e, slick, currentSlide) => {
        $(e.currentTarget).siblings('.lim-portfolio__slider-counter').html(`<span>${currentSlide + 1}/${slick.$slides.length}</span>`);
    });
});