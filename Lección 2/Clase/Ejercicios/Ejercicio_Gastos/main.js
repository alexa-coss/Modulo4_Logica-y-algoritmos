const gastos = [];

function agregarGasto() {
    // 🚀 Completar: Obtener valores del input y validar que sean correctos.
    // 🚀 Completar: Agregar un objeto con descripción y monto al array gastos.
}

function ordenarGastos() {
    // 🚀 Completar: Ordenar los gastos de mayor a menor.
}

function calcularTotal() {
    // 🚀 Completar: Calcular el total gastado con reduce() y mostrarlo en alerta.
}

// Dado por sensei
function actualizarGastos() {
    // 🚀 Completar: Renderizar la lista de gastos en el DOM.
    const lista = document.getElementById("lista");
    lista.innerHTML = gastos.map((gasto, index) => 
        `<li>${index + 1}. ${gasto.descripcion} - $${gasto.monto} 
        <button onclick="eliminarGasto(${index})">Eliminar</button></li>`
    ).join("");
}