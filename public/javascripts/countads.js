function myFunction(idads) {
    $.getJSON("https://tv-advertisement-purwanto1337.c9users.io/ads/viewcount/"+idads, function(json){
        document.getElementById("count").innerHTML = json.total
      });
    document.getElementById("ads").innerHTML = idads
}
/*
function onlinePage(idtv) {
    var x = "online? " + navigator.onLine (idtv);
    document.getElementById("demo").innerHTML = x;
}
*/