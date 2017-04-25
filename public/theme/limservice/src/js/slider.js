$(document).ready(() => {
    let $slider = $('.lim-slider__container').slick({
        arrows: false,
        infinite: false
    });

    let centered  = $('.lim-slider__controls').attr('data-centered');

    centered = (typeof centered !== typeof undefined) && (centered !== false);

    let $sliderControls = $('.lim-slider__controls .controls__list-item');

    let $slides = $('.lim-slider__container .slide');

    let $controlsList = $('.lim-slider__controls .controls__list');

    if(centered) {
        let controlsWidth = 0;

        $sliderControls.each((index, el) => {
            controlsWidth += $(el).outerWidth(true);
        });

        $controlsList.css('width', controlsWidth);
    }

    $sliderControls.on('click', (e) => {
        e.preventDefault();

        let $target = $(e.currentTarget);

        let $targetSlide = $($target.attr('data-target'));

        $slider.slick('slickGoTo', $slides.index($targetSlide));

        $sliderControls.removeClass('active');

        $target.addClass('active');

        if(centered) {
            $controlsList.css('transform', `translateX(-${$target.position().left}px)`);
        }
    });

    $slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        console.log('hello');

        let target = $(slick.$slides[nextSlide]).attr('id');

        $sliderControls.removeClass('active');

        $sliderControls.filter(`[data-target="#${target}"]`).addClass('active');
    });

    $slider.on('swipe', (event, slick, direction) => {
        console.log(direction);

        let target = $(slick.$slides[nextSlide]).attr('id');

        $sliderControls.removeClass('active');

        $sliderControls.filter(`[data-target="#${target}"]`).addClass('active');
    });
});