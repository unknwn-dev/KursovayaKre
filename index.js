let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.4775495409843, lng: 35.02095581604529 },
    zoom: 8,
  });
}

window.initMap = initMap;