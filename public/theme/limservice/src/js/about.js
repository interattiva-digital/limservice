$(document).ready(() => {
    $('[data-work-slider]').slick({
        prevArrow: $('.slide__prev'),
        nextArrow: $('.slide__next'),
        fade: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: true,
                    prevArrow: false,
                    nextArrow: false,
                }
            }
        ]
    });
});
