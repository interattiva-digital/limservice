$(document).ready(() => {
    $('[data-product-toggle]').on('click', (e) => {
        let target = $(e.currentTarget).attr('data-product-toggle');

        $(target).toggleClass('active');
    });

    // $('[data-sync-select]').on('change', (e) => {
    //     let value = $(e.currentTarget).val();
    //     let target = $(e.currentTarget).attr('data-sync-select');
    //
    //     $(target).val(value);
    // });

    $('[data-reloading-form] *').on('change', () => {
       $('[data-reloading-form]').submit();
    });

    $('.products__filters-toggle').on('click', (e) => {
        $(e.currentTarget).toggleClass('active');
        $('.header').toggleClass('active');
        $('.header__nav-wrap').toggleClass('active');
        $('.header__logo-wrap').toggleClass('active');
        $('.products__filters--mobile').toggleClass('active');
        $('body').toggleClass('menu-open');
    });
});