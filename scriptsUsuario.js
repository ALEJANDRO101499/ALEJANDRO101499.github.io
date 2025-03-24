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

// Función para mostrar la ubicación del transportista
function mostrarTransportista() {
    var transportistaLat = localStorage.getItem('transportistaLat');
    var transportistaLon = localStorage.getItem('transportistaLon');
    
    if (transportistaLat && transportistaLon) {
        // Si existen las coordenadas del transportista en el LocalStorage
        L.marker([transportistaLat, transportistaLon])
            .addTo(map)
            .bindPopup('Transportista')
            .openPopup();
    }
}

// Llamar a la función para mostrar al transportista
mostrarTransportista();
