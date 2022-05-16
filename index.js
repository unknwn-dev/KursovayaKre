let map;

function initMap() {

  const dnepr = { lat: 48.4775495409843, lng: 35.02095581604529 }

  map = new google.maps.Map(document.getElementById("map"), {
    center: dnepr,
    zoom: 8,
  });

  const marker = new google.map.Marker({
    position: dnepr,
    map: map
  })
}

window.initMap = initMap;