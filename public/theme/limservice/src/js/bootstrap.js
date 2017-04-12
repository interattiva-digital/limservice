// Declare globals

window.jQuery = window.$ = require('jquery');

window.Vue = require('vue');

require('foundation-sites');

// Declare Vue components

Vue.component('slider', require('./components/slider.vue'));
Vue.component('slide', require('./components/slide.vue'));
Vue.component('lim-map', require('./components/map.vue'));