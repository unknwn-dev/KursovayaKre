let map;

function initMap() {

  const dnepr = { lat: 48.4775495409843, lng: 35.02095581604529 }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: dnepr,
    zoom: 8,
  });

  const marker = new google.maps.Marker({
    position: dnepr,
    map: map
  })
}

window.initMap = initMap;