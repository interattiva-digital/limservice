$(document).ready(() => {
    $('[data-landing-slider]').slick({
        prevArrow: $('.slider__prev'),
        nextArrow: $('.slider__next'),
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
    });
});