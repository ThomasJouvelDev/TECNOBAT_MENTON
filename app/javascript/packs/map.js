import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const name = "TECNOBAT";
const address = "28 rue Longue 06500 Menton"
let map = null;


// fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json&polygon=1&addressdetails=1`).then(response => response.json()).then((data) => {
//   data = data[0];

  const latPlace = 43.77728608490804;
  const lonPlace = 7.5073139369498865;
  // const boundingBox = data.boundingbox;

  map = L.map('map').setView([
    latPlace, lonPlace,
  ], 14);

  // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors" }).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1IjoidGhvbWFzam91dmVsIiwiYSI6ImNqc3VmMG9icDE4M2Y0OXM5a3A3bHp6MGkifQ.hTGAbMmFRFEqnFuk3VjgsA'
  }).addTo(map);
  L.marker([latPlace, lonPlace]).addTo(map).bindPopup(`
                                                      ${name}
                                                      <br>
                                                      ${address}
                                                      `).openPopup();
// });

