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

        let $targetSlide = $($target.attr('data-target'));

        $slider.slick('slickGoTo', $slides.index($targetSlide));

        $sliderControls.removeClass('active');

        $target.addClass('active');
    });

    $slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        let target = $(slick.$slides[nextSlide]).attr('id');

        $sliderControls.removeClass('active');

        $sliderControls.filter(`[data-target="#${target}"]`).addClass('active');
    });
});