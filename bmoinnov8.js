function home() {
            window.location = "http://localhost/BMOInnov8/index.html" ;
}

function wentto() {
            window.location = "http://localhost/BMOInnov8/wantto.html" ;
}

function simpleGet(){

    $.get("https://jsonplaceholder.typicode.com/posts/1",
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });

}