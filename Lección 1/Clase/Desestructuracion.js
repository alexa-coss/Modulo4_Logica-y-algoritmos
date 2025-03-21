const destinos = ["Roma", "París", "Tokio"];

const [primero, segundo] = destinos;

console.log(primero);
console.log(segundo);

const [,,tercer] = destinos; // Dejar las anteriores vacías y obtener el tercero.

console.log(tercer);

const viaje = {
    destino: "Londres",
    duracion: 300,
    precio: 1200
}

const {destino} = viaje
const {precio} = viaje

console.log(destino);
console.log(precio);