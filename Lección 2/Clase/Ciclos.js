const destinos = ["Roma", "Tokio", "París"]
const frutas = ["Manzana", "Platano", "Sandía", "Pera"];
const numeros = [20,50,79,62,123];


const usuario = {
    nombre: "José Hernández",
    edad: 30,
    correo: "test@mail.com",
    saldo: "Hola! Soy Joss y es un placer",
    viajesRealizados: 0
}

console.log(destinos[2]);

for (let i=0; i<destinos.length; i++){
    console.log(destinos[i]);
}

for(let destino of destinos){
    console.log(destino);
}

for(let clave in usuario){
    // console.log(clave);
    console.log(`${usuario[clave]}`);
    /* Cada valor lo pinto en la UI o se lo inyecto a un html */
}

/*
// let externa = 0;

destinos.forEach(elemento=>{
    // if(condicion){
    //    externa=elemento;
    // }
    console.log(elemento);
    // Mandar llamar a otra funcipón.
    // Asignar los valores del arreglo conforme los necesite
})

    // Se podría poner:

función paraElForEach(elemento){
    console.log(elemento);
}

destinos.forEach(paraElForEach)
*/

for(let destino of destinos){
    console.log(destino);
}


let acumulador = 0;

function paraElForEach(elemento){
    console.log(elemento)
}

function acum(elemento){
    acumulador = acumulador + elemento;
}

destinos.forEach(paraElForEach);
frutas.forEach(paraElForEach);
numeros.forEach(acum);

console.log(acumulador);