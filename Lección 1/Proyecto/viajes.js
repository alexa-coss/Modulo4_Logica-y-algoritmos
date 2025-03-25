// viajes.js

// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (usuario, origen, destino, ciudad, fecha, transporte) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        usuario,
        origen,
        destino,
        ciudad,
        fecha,
        transporte,
        costo: calcularCosto(origen, destino, ciudad, transporte)
    };

    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (origen, destino, ciudad, transporte) => {
    let costoBase = 0;

    // Costo adicional por viajar entre continentes
    if (origen === "América" && destino !== "América") {
        costoBase += 110;
    } else if (origen === "Oceanía" && destino !== "Oceanía") {
        costoBase += 100;
    } else if (origen !== destino) {
        costoBase += 50;
    }

    // Costo base por destino
    if (ciudad === "CDMX") { // América
        costoBase = 350;
    } else if (ciudad === "Bogotá") { // América
        costoBase = 350;
    } else if (ciudad === "Rio de Janeiro") { // América
        costoBase = 500;
    } else if (ciudad === "New York") { // América
        costoBase = 750;
    } else if (ciudad === "Paris") { // Europa
        costoBase = 700;
    } else if (ciudad === "Londres") { // Europa
        costoBase = 650;
    } else if (ciudad === "Roma") { // Europa
        costoBase = 600;
    } if (ciudad === "Tokyo") {  // Asia
        costoBase = 800;
    } else if (ciudad === "El Cairo") {  // África
        costoBase = 600;
    } else if (ciudad === "Sídney") {  // Oceanía
        costoBase = 700;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 300;
    } else if (transporte === "Tren") {
        costoBase += 150;
    } else if (transporte === "Auto") {
        costoBase += 120;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log(`Usuario: ${viaje.usuario}`);
        console.log(`Origen: ${viaje.origen}`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Ciudad: ${viaje.ciudad}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: ${viaje.costo}`);
        console.log("---------------------------");
    }
}

module.exports = { registrarDestino, mostrarItinerario };