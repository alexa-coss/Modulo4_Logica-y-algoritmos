// Merge sort

const arregloPrueba = [8, 3, 51, 15, 9,1 ,6, 8]

function mergeSort (arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0,middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right)
}

function merge(left, right) {
    const result = []
    let i=0, j=0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    return [...result, ...left.slice(i), ...right.slice(j)] // Los primeros elementos corrresponden al resultado.
    // result, left, right] -> Evitamos esto vaiando los resultados de cada uno.
    // const mergeArr = result.concat() -> Incluimos otra variable.
    // Operador de propagación.
}

console.log(mergeSort(arregloPrueba));


// Ejemplo para ver como funciona "...nombre"
const persona = {
    name: "GHJGJ",
    edad: 15
}

console.log(persona)

const obj = {
    ...persona,
    hobby: "Play"
}

console.log(obj)


// Ejemplo Merge Sort con Objetos
const usuarios = [
    { name: "Ana", age: 32 },
    { name: "Luis", age: 25 },
    { name: "Luis", age: 26 },
    { name: "Pedro", age: 28 },
]

function mergeSortByProp(arr, prop) {
    if (arr.length == 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortByProp(arr.slice(0,mid), prop)
    const right = mergeSortByProp(arr.slice(mid), prop)

    return mergeByProp(left, right, prop);
}

function mergeByProp(left, right, prop) {
    const result = [];
    let i=0, j=0;

    while (i < left.length && j < right.length) {
        if (left[i][prop] < right[j][prop]) { // Ejemplo: "left[i].name".
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return[...result, ...left.slice(i), ...right.slice(j)]
}

console.log(mergeSortByProp(usuarios, 'name'));
console.log(mergeSortByProp(usuarios, 'age'));console.log(mergeSortByProp(usuarios, 'name'));



// 
function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i=0; i<k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for (let i=k; i<arr.length; i++) {
        windowSum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

const arraySum = [2, 1, 5, 4, 3, 2, 5, 1]

console.log(maxSubarraySum(arraySum, 5));


// Algoritmo Sliding Window
// De una cadena, encontrar la mayor longitud sin que se repita.
function lengthOfLongest(str) {
    let seen = new Set(); // Set() me ayuda a ver cual no se repite.
    let left = 0, maxLength = 0;

    for (let right = 0; right < str.length; right++) { // Mover ventana a la derecha.
        while (seen.has(str[right])) { // Sacar la repetida de la izquierda.
            seen.delete(str[left++])
        }
        seen.add(str[right]) // Si no hay repetidos, se añade un carácter.
        maxLength = Math.max(maxLength, right - left + 1) // Comparar el que ya tiene vs el tamaño de la ventana.
    }

    return maxLength;
}

console.log(lengthOfLongest("dfghdfghdfgddddfg12fggfgfhdfgh1234"));
console.log(lengthOfLongest("jkvjksav54fbsdbdfj1532"));