$(document).ready(() => {
    $('.header__nav').on('click', (e) => {
        $('.nav-menu').toggleClass('active');
        $('.header__contacts-wrap').toggleClass('invisible');
    });

    $('.header__contacts').on('click', (e) => {
        $('.contacts-menu').toggleClass('active');
        $('.header__nav-wrap').toggleClass('invisible');
    });
});