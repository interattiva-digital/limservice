$(document).ready(() => {
    let $slider = $('.lim-slider__container').slick({
        arrows: false,
        infinite: false
    });

    let $sliderControls = $('.lim-slider__controls .controls__list-item');

    let $slides = $('.lim-slider__container .slide');

    $sliderControls.on('click', (e) => {
        e.preventDefault();

        let $target = $(e.currentTarget);

        let $targetSlide = $($target.children('a').attr('href'));

        $slider.slick('slickGoTo', $slides.index($targetSlide));

        $sliderControls.removeClass('active');

        $target.addClass('active');
    });
});