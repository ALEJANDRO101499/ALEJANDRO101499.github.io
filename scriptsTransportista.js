// Inicializar el mapa
var map = L.map('map').setView([19.432608, -99.133209], 13);  // Ciudad de México como ejemplo

// Cargar los tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Crear un icono personalizado para el transportista
var camionIcon = L.icon({
    iconUrl: 'camion.png',  // Ruta de la imagen
    iconSize: [50, 50],            // Tamaño del icono
    iconAnchor: [25, 50],          // Anclaje del icono, donde se coloca el marcador
    popupAnchor: [0, -50]          // Posición del popup respecto al icono
});

// Agregar un marcador para el transportista
var transportistaMarker;

// Obtener la ubicación actual del transportista
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Si el marcador aún no existe, lo creamos con el icono personalizado
        if (!transportistaMarker) {
            transportistaMarker = L.marker([lat, lon], { icon: camionIcon }).addTo(map)
                .bindPopup('Tu ubicación')
                .openPopup();
        } else {
            // Si el marcador ya existe, solo actualizamos su posición
            transportistaMarker.setLatLng([lat, lon]);
        }

        // Limpiar cualquier ubicación anterior en localStorage antes de guardar la nueva
        localStorage.removeItem('transportistaLat');
        localStorage.removeItem('transportistaLon');

        // Guardar la ubicación del transportista en el LocalStorage
        localStorage.setItem('transportistaLat', lat);
        localStorage.setItem('transportistaLon', lon);

        // Centrar el mapa en la ubicación del transportista
        map.setView([lat, lon], 13);
    });
} else {
    alert("Geolocalización no soportada por este navegador.");
}
