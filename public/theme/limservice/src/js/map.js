$(document).ready(() => {
    if(typeof google !== 'undefined') {
        let $loc = $('.js-location-input');

        let coors = {
            lat: parseFloat($loc.attr('data-latitude')),
            lng: parseFloat($loc.attr('data-longitude')),
        };

        let map = new google.maps.Map(document.getElementById('map'), {
            center: coors,
            zoom: 14
        });

        let marker = new google.maps.Marker({
            position: coors,
            map: map
        });
    }
});