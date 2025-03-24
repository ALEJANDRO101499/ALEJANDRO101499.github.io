// Función que maneja la selección de perfil y redirige a la página correspondiente
function seleccionarPerfil(perfilSeleccionado) {
    // Guardamos el perfil en localStorage
    localStorage.setItem('perfil', perfilSeleccionado);

    // Redirigimos a la página correspondiente según el perfil seleccionado
    if (perfilSeleccionado === 'usuario') {
        window.location.href = 'mapaUsuario.html';  // Página para el Usuario
    } else if (perfilSeleccionado === 'transportista') {
        window.location.href = 'mapaTransportista.html';  // Página para el Transportista
    }
}
