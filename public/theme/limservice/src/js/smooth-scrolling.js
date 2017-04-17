$(document).ready(() => {
    $('[data-scroll-target]').on('click', (e) => {
        let target = $(e.currentTarget).attr('data-scroll-target');

        $('body, html').animate({
            'scrollTop': $(target).offset().top
        }, 500);
    });
});