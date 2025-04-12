// Importar módulo
const { colors } = require('chalk');
const { error } = require('console');
const fs = require('fs')
// import {writeFile} from 'fs'
// import {msj} from './module.js' -> Poner   "type": "module", en package.json
// '../../module.js' -> '@module.js' -> Puede dar problemas en GitHub

// Mensaje de ejemplo
const mensaje = `¡Hola desde node.js! Esta es una línea escrita desde JS`;

// Escribir el archivo
fs.writeFile('../Bootstrap/saludo.txt', mensaje, (err) => {
    if (err) {
        console.log('Error al escribir el archivo:', err);
    } else {
        console.log(colors.green('Archivo creado exitosamente como saludo.txt'));
    }
})

fs.readFile('../Bootstrap/saludo.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(colors.(data));
})