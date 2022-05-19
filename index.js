let map;
var numOfPoints = 5;
function initMap() {

  const dnepr = { lat: 48.4775495409843, lng: 35.02095581604529 }
  const zone = { 
    latMin: 48.4526,
    latMax: 48.46859,
    lngMin: 34.98936,
    lngMax: 34.99
  }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: dnepr,
    zoom: 8,
  });

  for(var i = 0; i < numOfPoints; i++){
    new google.maps.Marker({
      position : {
        lat : Math.random() * (zone.latMax - zone.latMin) + zone.latMin,
        lng : Math.random() * (zone.lenMax - zone.lenMin) + zone.lenMin
      },
      map : map
    });
  }

}


window.initMap = initMap;