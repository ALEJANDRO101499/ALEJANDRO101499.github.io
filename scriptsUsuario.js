// Inicializar el mapa
var map = L.map('map').setView([19.432608, -99.133209], 13);  // Ciudad de México como ejemplo

// Cargar los tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Obtener la ubicación actual del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var userLat = position.coords.latitude;
        var userLon = position.coords.longitude;
        
        // Agregar marcador de usuario
        L.marker([userLat, userLon])
            .addTo(map)
            .bindPopup('Tu ubicación')
            .openPopup();

        // Centrar el mapa en la ubicación del usuario
        map.setView([userLat, userLon], 13);
    });
} else {
    alert("Geolocalización no soportada por este navegador.");
}

// Simulación de los transportistas (en un caso real, estos datos provendrían de una base de datos o API)
var transportistas = [
    { lat: 19.432200, lon: -99.133500, nombre: 'Transportista 1' },
    { lat: 19.435000, lon: -99.130000, nombre: 'Transportista 2' }
];

// Agregar los transportistas al mapa
transportistas.forEach(function(transportista) {
    L.marker([transportista.lat, transportista.lon])
        .addTo(map)
        .bindPopup(transportista.nombre);
});