/* Hashing y tablas hash */

const contarLetras = (cadena) => {
    const frecuencias = new Map();
    for (let letra of cadena) {
        if (frecuencias.has(letra)) {
            frecuencias.set(letra, frecuencias.get(letra) +1)
        } else {
            frecuencias.set(letra, 1)
        }
    }

    // frecuencias.delete("a");

    return frecuencias
}

console.log(contarLetras("banana")); // { 'b' => 1, 'a' => 3, 'n' => 2 }
console.log(contarLetras("banAna")); // { 'b' => 1, 'a' => 2, 'n' => 2, 'A' => 1 } -> Por orden de inserción.

const obj = {
    0: 'a',
    1: 'b', // "," no necessaria, solo por si agregamos.
}

console.log(obj.hasOwnProperty('0')); // True.

console.log(Object.keys(obj)); // [ '0', '1' ]

console.log(Object.values(obj)); // [ 'a', 'b' ]

/* // -> Actiar al usar navegador.
// const resultado = document.querySelector('#resultado');
const texto = "savsgfahsvgas"
const frecuencias = {}

for (let char of texto) {
    frecuencias[char] = (frecuencias[char] || 0) + 1;
}

resultado.innerHTML = Object.entries(frecuencias).map(([letra, veces]) => `${letra}:${veces}`).join("<br>"); // "entries" keys and values.
*/

const tieneDuplicados = (arr) => {
    const seen = new Set();

    for (let num of arr) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

console.log(tieneDuplicados([1,2,3,2,4,5]));


/* Busqueda de subcadenas */

// Se hice prácticamente igual a rabinKarp, se corregirá
const buscarIngenuo = (text, patron) => {
    const posiciones = [];
    for (let i=0; i<=text.length - patron.length; i++) {
        if (text.slice(i, i+patron.length) === patron) {
            posiciones.push(i);
        }
    }
    return posiciones;
}

const rabinKarp = (texto, patron) => {
    const firma = str => [...str].reduce((a, c) => a + c.charCodeAt(0), 0);
    
    const firmaTarget = firma(patron)

    console.log(firmaTarget);
    const res = [];

    for (let i=0; i<texto.length - patron.length; i++) {
        const window = texto.slice(i, i+patron.length);
        if (firma(window) === firmaTarget && window === patron) {
            res.push(i)
        }
    }
    return res;
}

console.time("Ingenuo")
console.log(buscarIngenuo("hola hola hola mundo hola", "hol"));
console.timeEnd("Ingenuo")

console.time("RabinKarp")
console.log(rabinKarp("hola hola hola mundo hola", "hol"));
console.timeEnd("RabinKarp")


const textoOriginal = "hola hola hola mundo hola, el sol brilla sobre los campos verdes mientras las aves cantan suavemente en la distancia. Una brisa fresca recorre los caminos del bosque encantado, donde criaturas mágicas juegan entre los árboles altos y antiguos. La luna observa desde lo alto, iluminando senderos secretos y recuerdos olvidados. En una colina lejana, una niña sueña con volar, con alcanzar estrellas, con pintar el cielo de colores nuevos. Cada paso la acerca más al misterio del universo, a las historias no contadas que yacen en libros polvorientos y corazones valientes. Y en el silencio, la esperanza florece como flor silvestre en primavera..."

console.time("Ingenuo")
console.log(buscarIngenuo(textoOriginal, "hola hola"));
console.timeEnd("Ingenuo")

console.time("RabinKarp")
console.log(rabinKarp(textoOriginal, "hola hola"));
console.timeEnd("RabinKarp")