var map = L.map('map').setView([4.610587189482015, -74.11260430153935], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.610587189482015, -74.11260430153935]).addTo(map);
