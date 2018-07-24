/* Page Preloader */
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

/* ---------------------------------------------- /*
         * Background Slide show
/* ---------------------------------------------- */
$('#home').superslides({
    animation: 'fade',
    play: '4000',
});

/* ---------------------------------------------- /*
         * Lightbox
/* ---------------------------------------------- */
$(function() {
    var gallery = $('#gallery a').simpleLightbox();
});

/* ---------------------------------------------- /*
         * Masonry Image grid
/* ---------------------------------------------- */
$('#gallery').flexImages({
    rowHeight: 300
});


/* ---------------------------------------------- /*
         * Google Map
/* ---------------------------------------------- */
google.maps.event.addDomListener(window, 'load', init);

function init() {
 
    //If i need some more: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // Options
        zoom: 18,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        setClickableIcons: true,


        center: new google.maps.LatLng(43.237868, 27.8716053),

        // Map's Style
        styles: [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 10
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "saturation": "700"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [{
                "gamma": "0.75"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "lightness": "-17"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "666"
            }, {
                "lightness": "10"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "-37"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "100"
            }, {
                "weight": "2"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "labels.icon",
            "stylers": [{
                "saturation": "666"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "777"
            }, {
                "lightness": "80"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "0"
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "-4"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5dac6"
            }, {
                "visibility": "on"
            }, {
                "saturation": "-95"
            }, {
                "lightness": "62"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "saturation": "-100"
            }, {
                "gamma": "1.00"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [{
                "gamma": "0.50"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "saturation": "-100"
            }, {
                "gamma": "0.50"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5c6c6"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "lightness": "-13"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [{
                "lightness": "0"
            }, {
                "gamma": "1.09"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e4d7c6"
            }, {
                "saturation": "-100"
            }, {
                "lightness": "47"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "lightness": "-12"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbfaf7"
            }, {
                "lightness": "77"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "lightness": "-5"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "-15"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "47"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#acbcc9"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "53"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "lightness": "-42"
            }, {
                "saturation": "17"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "lightness": "61"
            }]
        }]
    };

    var mapElement = document.getElementById('map');

var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 class="firstHeading">La Corte dei Mangioni</h1>'+
      '<div id="bodyContent">'+
            '<p>ж.к. Възраждане 1</p>'+
      '<p>ул. "Здравко Чакъров" 9</p>'+
      '<p>9020 Варна</p>'+
      '<p>България</p>'+
        '<p><a href="https://www.google.bg/maps/place/%D0%9F%D0%B8%D1%86%D0%B0%D1%80%D0%B8%D1%8F+%22La+Corte+dei+Mangioni%22+%D0%92%D1%8A%D0%B7%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D0%B5/@43.2380064,27.8735737,15z/data=!4m5!3m4!1s0x0:0x97def439563c8412!8m2!3d43.2378716!4d27.8735778">Преглед в Google Карти</a></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(43.2376697,27.8735113),
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Ресторант - Пицария La Corte dei Mangioni',
        icon: 'images/map-icon.png',
    });

      marker.addListener('click', toggleBounce);

      marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
}
