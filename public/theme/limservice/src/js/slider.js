$(document).ready(() => {
    let $slider = $('.lim-slider__container').slick({
        arrows: false,
        infinite: false,
        draggable: false,
        fade: true
    });

    let $controlsWrap = $('.lim-slider__controls');

    let centered  = $controlsWrap.attr('data-centered');

    centered = (typeof centered !== typeof undefined) && (centered !== false);

    let $sliderControls = $('.lim-slider__controls .controls__list-item');

    let $slides = $('.lim-slider__container .slide');

    let $controlsList = $('.lim-slider__controls .controls__list');

    if(centered) {
        let controlsWidth = 0;

        $sliderControls.each((index, el) => {
            controlsWidth += $(el).outerWidth(true);
        });

        console.log($controlsWrap.innerWidth());
        $controlsList.currentTransform = $controlsWrap.width()/2 - $sliderControls.first().outerWidth()/2;
        $controlsList.css('transform', `translateX(${$controlsList.currentTransform}px)`);
        $controlsList.css('width', controlsWidth);
    }

    $sliderControls.on('click', (e) => {
        e.preventDefault();

        let $target = $(e.currentTarget);

        if($target.hasClass('active')) {
            return;
        }

        let $targetSlide = $($target.attr('data-target'));

        $slider.slick('slickGoTo', $slides.index($targetSlide));

        let $current = $sliderControls.filter('.active');

        $sliderControls.removeClass('active');

        $target.addClass('active');

        let direction = $target.index() > $current.index() ? 1:-1;

        if(centered) {
            $controlsList.currentTransform = $controlsList.currentTransform - direction*($target.outerWidth(true)/2 + $current.outerWidth(true)/2);
            $controlsList.css('transform', `translateX(${$controlsList.currentTransform}px)`);
        }
    });

    $slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {

        let target = $(slick.$slides[nextSlide]).attr('id');

        // $sliderControls.removeClass('active');
        //
        // $sliderControls.filter(`[data-target="#${target}"]`).addClass('active');
    });

    // $slider.on('swipe', (event, slick, direction) => {
    //
    //     let target = $(slick.$slides[nextSlide]).attr('id');
    //
    //     $sliderControls.removeClass('active');
    //
    //     $sliderControls.filter(`[data-target="#${target}"]`).addClass('active');
    // });
});