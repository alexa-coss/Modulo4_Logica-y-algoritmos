// Temporizador
function timer(n) {
    if(n === 0){
        console.log("¡Despegue!");
        return;
    }
    setTimeout(() => {
        timer(n-1);
    }, 1000)
    console.log(n)
}

timer(5);


// Sumatoria
function sum(n) {
    if (n === 10) return 0;
    return n + sum(n+1)
}

console.log(sum(5));


// Factorial
function factorial(n) {
    if (n === 0) return 1;
        return n*factorial(n-1)
}

console.log("Factorial: ", factorial(5));


/*
Usar con: problemas complejos.

No usar si:
    Se puede resolver con bucles y ciclos fáciles.
    Se puede hacer mucho y desbordar la memria (caso muy extremo).
*/



// Sumar el siguiente arreglo
const arrayN=[1,
    [2,3],
    [4,
        [5],
        [6,
            [10, 5]
        ]
    ]
]

/*
    📌 Lo intenté!
function sumArr(arr) {
    arrayN.forEach((arr) => {
        // In if para saber si es arreglo.
        let sum = 0;
        sum = sum + arrayN[i];
    })
}
*/

function sumArr(arr, iteracion) {
    let sum = 0;
    for (let item of arr){
        if (Array.isArray(item)){
            sum += sumArr(item, iteracion + 1);
        } else {
            sum += item;
        }
    }
    console.log(`Subtarea: ${iteracion}: ${sum}`);
    return sum;
}

/*
    📌 Existen diferentes formas de resolverlo!
function sumArr(arr) {
    let sum = 0;
    for (let item of arr){
        if (item?.length){
            // sum += sumArr(item)
        }
    }
    // return sum;
}

function sumArr(arr) {
    let sum = 0;
    for (let item of arr){
        try{
            if (item.length){
                //
            }
        }catch{
            //
        }
    }
}
*/

console.log(sumArr(arrayN, 1));


/*
const arr = [1,2,3,4,5];
let left = 0;
let right = arr.length-1;
*/



// Palindromo
function isPalindrome(str) {
    let left = 0;
    let right = str.length-1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }
    return true;
}

console.log("Es palindromo: ", isPalindrome(("anita lava la tina").replaceAll(" ","")));


// 
function tieneParconSuma(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const sum = arr[left] + arr [right];
        if (sum === target) return true;
        if ( sum < target) left++;
        else right--;
    }
    return false;
}

const arreglo=[1,2,3,4,5,6];

console.log("Suma par arreglo: ", tieneParconSuma(arreglo, 6));


/*
    📌 Ejercio 1. Encontrar un duplicado.
    📌 Ejercio 2. Voltear una cadena.
*/


/*
    📌 Verificar corchetes cerrados.
*/

/*
const str = "ab[c[d]e]f";

function comparaRec() {
    let sum = 0;
    for (let item of arr){
        if (Array.isArray(item)){
            sum += sumArr(item, iteracion + 1);
        } else {
            sum += item;
        }
    }
    console.log(`Subtarea: ${iteracion}: ${sum}`);
    return sum;
}

function comparaPunt() {
    let left = 0;
    let right = str.length;

    while (left < right) {
        if (left === "[" && right === "]") return true;
        if (left === "[") {
            right--;
        }
        else left++;
    }
    return false;
}

console.log("Ver si están los corchetes cerrados: ", comparaPunt(str));
*/

const corchetes = [
    "ghugyjgjghj",
    "ab[c[d]e]f",
    "ab[c[d]e",
    "ab[c[d]]e]",
    "a]b[c",
    "data[info[level1[level2]]]done",
    "x[y[z]w]k",
    "a[b]c"
];

const comparaRec = (str, index = 0, open = 0) => {

    if (index === str.length) {
        return open === 0;
    }

    const char = str[index];

    if (char === '[') {
        return comparaRec(str, index + 1, open + 1);
    } else if (char === ']') {
        if (open === 0) return false; // bracket cerrado sin abrir
        return comparaRec(str, index + 1, open - 1);
    } else {
        return comparaRec(str, index + 1, open);
    }
}

const comparaPunt = (str) => {
    let left = 0;
    let right = str.length - 1;
    let balance = 0;

    while (left <= right) {
        if (str[left] === '[') {
            balance++;

            // Buscar cierre correspondiente desde la derecha
            while (right > left) {
                if (str[right] === ']') {
                    balance--;
                    right--; // Cerramos este ] y lo ignoramos después
                    break;
                }
                right--;
            }

            // Si no encontramos un cierre adecuado
            if (balance > 0 && right <= left) return false;
        }

        // Si encontramos un cierre sin apertura previa
        if (str[left] === ']' && balance <= 0) {
            return false;
        }

        left++;
    }

    return balance === 0;
}


/* corchetes.forEach(item => console.log(`${comparaRec(item) ? `Exito al procesar cadena ${item}` : `Error de sintaxis ${item}`}`)); */

corchetes.forEach(item => console.log(`${comparaPunt(item) ? `Exito al procesar cadena ${item}` : `Error de sintaxis ${item}`}`));