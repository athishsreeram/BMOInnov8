function home() {
            var base_url = window.location.origin;
            window.location = base_url+"/BMOInnov8/index.html" ;
}

function couppur() {
var base_url = window.location.origin;
            window.location = base_url+"/BMOInnov8/couppur.html" ;
}

function com() {
var base_url = window.location.origin;
            window.location = base_url+"/BMOInnov8/com.html" ;
}

function gas() {
var base_url = window.location.origin;
            window.location = base_url+"/BMOInnov8/gas.html" ;
}

function simpleGet(){

    $.get("https://jsonplaceholder.typicode.com/posts/1",
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });

}

var addMarkersToMap = function(map, lat, lag,name) {
		var latitudeAndLongitudeOne = new google.maps.LatLng(lat, lag);

		var infowindow = new google.maps.InfoWindow({
			content : name
		});

		var markerOne = new google.maps.Marker({
			position : latitudeAndLongitudeOne,
			map : map,
			title : name
		});

		google.maps.event.addListener(markerOne, 'click', function() {
			infowindow.open(map, markerOne);
		});

}

var showMap = function(lat,lag) {
    var mapOptions = {
        zoom : 17,
        center : new google.maps.LatLng(lat, lag),
        mapTypeId : google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
    return map;
}