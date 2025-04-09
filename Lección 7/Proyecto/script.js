/*
  📌 Práctica 7. Divide y Vencerás
  Búsqueda del Máximo en un Arreglo con Divide and Conquer
*/


/*
    Objetivo

El alumno debe usar "divide and conquer" encontrar el número máximo un arreglo. Practicará cómo dividir un problema
en partes más pequeñas y detener la recursión en un caso base (nuevamente).


Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número
máximo.

    Instrucciones para resolver el problema:
• Divide el arreglo en dos mitades.
• Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
• Combina las soluciones comparando los máximos de ambas mitades.
• Devuelve el número máximo encontrado.
• Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en
la siguiente url: https://gist.github.com/heladio-devf-mx/3b019c2bcdb4354d6b7b51e1e9e48f7f
*/


/*
  📌 Código base

function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (true / condición /) {
        return / valor /;
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = ; // calcular el punto medio
    const left = ; // obtener la primera mitad
    const right = ; // obtener la segunda mitad

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = ; // llamada recursiva
    const rightMax = ; // llamada recursiva

    // TODO: Combinar las soluciones comparando los máximos
    return ; // máximo entre leftMax y rightMax
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10
*/


function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0]; // En array de 1 elemento, return dicho elemento.
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2); // calcular el punto medio
    const left = arr.slice(0,mid); // obtener la primera mitad
    const right = arr.slice(mid); // obtener la segunda mitad

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left); // llamada recursiva
    const rightMax = findMax(right); // llamada recursiva

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax); // máximo entre leftMax y rightMax
}

/*
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10
*/

// Arrays
const numbers1 = [3, 8, 2, 10, 5, 7];
const numbers2 = [11, 27, 9, 14, 3, 15, 22, 25];
const numbers3 = [5, 12, 33, 8, 2, 45, 67, 22, 19, 50];

// Array de arrays
const arrays = [numbers1, numbers2, numbers3];

// Obtener ul donde se mostrarán los arrays
const listaArraysHTML = document.getElementById('lista-arr');

// Agregarlos a la lista
arrays.forEach((array, index) => {
    const arrayElemento = document.createElement('li'); // Crear <li> de cada array.
    arrayElemento.innerHTML = `Arreglo ${index + 1}:&nbsp;&nbsp;&nbsp;<span class="number">${array.join(', ')}</span>.`; // Nombres separados por coma.
    listaArraysHTML.appendChild(arrayElemento); // Agregar el <li> al <ul>.
});

// Mostrar resultados
document.getElementById('max-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario (que se refresque la pantalla)

    // Array de arrays
    const arrays = [numbers1, numbers2, numbers3];

    // Obtener el contenedor de la lista de resultados
    const listaResultadosHTML = document.getElementById('lista-result');

    // Limpiar los resultados previos antes de agregar nuevos
    listaResultadosHTML.innerHTML = '';

    // Iterar sobre los arreglos y crear un <li> por cada uno
    arrays.forEach((arr, index) => {
        const result = findMax(arr); // Obtener el máximo para array
        const resultElement = document.createElement('li'); // Crear <li> de cada array.
        resultElement.innerHTML = `Arreglo ${index + 1}:&nbsp;&nbsp;&nbsp;<span class="number">${result}</span>.`;
        listaResultadosHTML.appendChild(resultElement); // Agregar el <li> al <ul>.
    });

    // Mostrar el párrafo de resultados al hacer clic en "Analizar"
    const Results = document.querySelector('#result');
    Results.style.display = 'block';  // Mostrar el párrafo
});