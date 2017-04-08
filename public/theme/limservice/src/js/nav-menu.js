$(document).ready(() => {
    $('.header__nav').on('click', (e) => {
        $(e.currentTarget).toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.header__contacts-wrap').toggleClass('invisible');
        $('.header__logo-wrap').toggleClass('active');
    });

    $('.header__contacts').on('click', (e) => {
        $(e.currentTarget).toggleClass('active');
        $('.contacts-menu').toggleClass('active');
        $('.header__nav-wrap').toggleClass('invisible');
        $('.header__logo-wrap').toggleClass('active');
        $('.header__language').toggleClass('hidden');
    });
});