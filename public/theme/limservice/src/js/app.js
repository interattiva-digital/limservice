require('./bootstrap.js');
require('./nav-menu.js');
require('./slider.js');
require('./portfolio-slider.js');
require('./products.js');
require('./about.js');
require('./portfolio.js');
require('./landing.js');
require('./services.js');
require('./smooth-scrolling.js');
require('./map.js');

$(document).ready(() => {
    $(document).foundation();
});

window.renderCaptchas = function () {
    $('.g-recaptcha').each(function(index, el) {
        let sitekey = $(el).attr('data-sitekey');
        grecaptcha.render(el, {'sitekey' : sitekey});
    });
};