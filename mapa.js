var mapa = L.map('map').setView([3.3, -76], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href=”http://osm.org/copyright”>OpenStreetMap</a> contributors'
    }).addTo(mapa);

var persona = {
    nombre : "BREINER",
    apellido : "PEÑARANDA",
    altura : 1.87, 
    edad : 25}