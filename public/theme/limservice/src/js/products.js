$(document).ready(() => {
    $('[data-product-toggle]').on('click', (e) => {
        let target = $(e.currentTarget).attr('data-product-toggle');

        $(target).toggleClass('active');
    });

    $('[data-reloading-form] *').on('change', () => {
       $('[data-reloading-form]').submit();
    });
});