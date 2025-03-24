// Inicializar el mapa
var map = L.map('map').setView([19.432608, -99.133209], 13);  // Ciudad de México como ejemplo

// Cargar los tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador para el transportista
var transportistaMarker;

// Obtener la ubicación actual del transportista
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Si el marcador aún no existe, lo creamos
        if (!transportistaMarker) {
            transportistaMarker = L.marker([lat, lon]).addTo(map)
                .bindPopup('Tu ubicación')
                .openPopup();
        } else {
            // Si el marcador ya existe, solo actualizamos su posición
            transportistaMarker.setLatLng([lat, lon]);
        }

        // Centrar el mapa en la ubicación del transportista
        map.setView([lat, lon], 13);
    });
} else {
    alert("Geolocalización no soportada por este navegador.");
}
