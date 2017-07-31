$(document).ready(() => {

    let options = {
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next'),
        fade: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    };

    $('[data-landing-slider]').slick(options);

    options.prevArrow = false;
    options.nextArrow = false;
    options.draggable = false;

    $('[data-landing-slider-titles]').slick(options);
});