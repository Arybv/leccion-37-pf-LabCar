function initMap(){
  var lugar = {lat: -12, lng: -77};
  var map = new google.map.Map(document.getElementById("map"), {
    zoon: 4,
    center: lugar
  });
  var marker = new google.map.Marker({
    position: lugar,
    map: map
  });
}
