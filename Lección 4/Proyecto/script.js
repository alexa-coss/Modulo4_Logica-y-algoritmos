/*
  📌 Práctica 4. Algoritmo de Los 2 Punteros
  Encuentra los Invitados que Pueden Sentarse Juntos
*/


/*
    Objetivo

Usar el algoritmo de los dos punteros para identificar rápidamente el primer par de invitados cuyos nombres comienzan
con la misma letra.


Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena.
Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo.
Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

Instrucciones para resolver el problema:
• Usa un puntero al inicio del arreglo y otro al siguiente elemento.
• Compara las iniciales de los nombres en las posiciones de ambos punteros.
• Si coinciden, detén la búsqueda y devuelve los nombres.
• Si no coinciden, avanza ambos punteros y repite.
• Detén la búsqueda si recorres toda la lista sin encontrar un par.
• Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejemplo de lo que se espera en
    la siguiente url: https://gist.github.com/heladio-devf-mx/e091e8dba47d51693cec1154f1cd2ed6
*/


/*
  📌 Código base
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
        // ...

        // TODO: Avanza los punteros si no coinciden
        // ...
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]
*/


// Lista de invitados por mesa
const invitados1 = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const invitados2 = ["Leticia", "Eduardo", "Alexa", "Pablito", "Lily", "Katherine", "Alejandra"];
const invitados3 = ["Javier", "Mariana", "Pablito", "Mario", "Hugo", "Rosalia", "Ro"];

// Encontrar parejas
function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara las iniciales de los nombres en los punteros
        if (arr[inicio][0] === arr[siguiente][0]) { // Si coinciden, devuelve el par.
            return `${arr[inicio]} y ${arr[siguiente]}.`;
        } else { // Avanza los punteros si no coinciden.
            inicio++;
            siguiente++;
        }
    }

    return `No se encontró pareja.`; // Si no se encuentra ningún par
}


    /* Para html */
// Mostrar invitados en HTML
const listaInvitadosHTML = document.getElementById('lista-productos');

// Función para agregar los invitados al HTML
function agregarInvitados(invitados, mesa) {
    const mesaElemento = document.createElement('li'); // Crear <li> de cada mesa.
    mesaElemento.textContent = `Mesa ${mesa}: ${invitados.join(', ')}`; // Nnombres separados por coma.
    listaInvitadosHTML.appendChild(mesaElemento); // Agregar el <li> al <ul>.
}

// Agregar las mesas de invitados
agregarInvitados(invitados1, 1);
agregarInvitados(invitados2, 2);
agregarInvitados(invitados3, 3);


// Mostrar resultados
document.getElementById('resultado').addEventListener('click', function() {
    // Obtener los resultados para cada mesa
    const resultado1 = encontrarPareja(invitados1); // Resultado para invitados1
    const resultado2 = encontrarPareja(invitados2); // Resultado para invitados2
    const resultado3 = encontrarPareja(invitados3); // Resultado para invitados3

    // Obtener el contenedor de la lista de resultados
    const listaResultadosHTML = document.getElementById('lista-resultados');

    // Limpiar los resultados previos antes de agregar nuevos
    listaResultadosHTML.innerHTML = '';

    // Crear un <li> por cada resultado y agregarlo a la lista
    const resultadoElemento1 = document.createElement('li');
    resultadoElemento1.textContent = `Mesa 1: ${resultado1}`;
    listaResultadosHTML.appendChild(resultadoElemento1);

    const resultadoElemento2 = document.createElement('li');
    resultadoElemento2.textContent = `Mesa 2: ${resultado2}`;
    listaResultadosHTML.appendChild(resultadoElemento2);

    const resultadoElemento3 = document.createElement('li');
    resultadoElemento3.textContent = `Mesa 3: ${resultado3}`;
    listaResultadosHTML.appendChild(resultadoElemento3);

    // Mostrar el párrafo de resultados al hacer clic en "Analizar"
    const pResultados = document.querySelector('section .producto p');
    pResultados.style.display = 'block';  // Mostrar el párrafo
});