(function(){
    "use strict";
    var address = "";
    var codeup = { lat: 29.426791, lng: -98.489602 };
    var mapOptions = {
      zoom: 10,
      mapTypeId: "roadmap",
      center: codeup
    };
    var geocoder = new google.maps.Geocoder();
               geocoder.geocode(
               { "address": address }, function(results, status) {

               if (status == google.maps.GeocoderStatus.OK) {

                   console.log(results);

                   map.setCenter(results[0].geometry.location);
               } else {

                   alert("Geocoding was not successful - STATUS: " + status);
               }
           });

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: codeup,
        map: map
    })
})();