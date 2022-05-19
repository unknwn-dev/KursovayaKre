let map;
var numOfPoints = 5;
function initMap() {

  const dnepr = { lat: 48.4775495409843, lng: 35.02095581604529 }
  const zone = { 
    latMin: 48.6,
    latMax: 48.3,
    lngMin: 34.7,
    lngMax: 35.2
  }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: dnepr,
    zoom: 9,
  });

  var points = new Array();

  for(var i = 0; i < numOfPoints; i++){
    points.push({
      lat : Math.random() * (zone.latMax - zone.latMin) + zone.latMin,
      lng : Math.random() * (zone.lngMax - zone.lngMin) + zone.lngMin
    });
  }

  
  for(var i = 0; i < numOfPoints; i++){
    var point = new google.maps.Marker({
      position : points[i],
      map : map
    });
  }

}


window.initMap = initMap;