require('./bootstrap.js');
require('./nav-menu.js');

let app = new Vue({
    el: '#app'
});

$(document).ready(() => {
    $(document).foundation();
});