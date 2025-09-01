var map = L.map('map').setView([4.61627462043914, -74.16101352284693], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.61627462043914, -74.16101352284693]).addTo(map);