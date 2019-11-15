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

function simpleGet(){

    $.get("https://jsonplaceholder.typicode.com/posts/1",
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });

}