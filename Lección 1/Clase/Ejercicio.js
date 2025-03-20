/*
    📌 Ejercicio.
    Probar con let y const.
*/


function pruebaVar() {
    if (true) {
        var ciudad = "Madrid";
    }
    console.log(ciudad); // Debería dar error, pero imprime "Madrid" debido a `var`
}

pruebaVar();