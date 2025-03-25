// app.js

const { registrarDestino, mostrarItinerario } = require('./viajes');

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Alexa Coss", "Europa", "África", "El Cairo", "2025-08-10", "Medios propios");
    registrarDestino("Pablito García", "Europa", "América", "CDMX", "2025-07-15", "Avión");
    registrarDestino("Lily Coss", "Oceanía", "Asia", "Tokyo", "2025-04-30", "Avión");
    registrarDestino("Katherine Coss", "América", "América", "Rio de Janeiro", "2025-12-24", "Auto");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();