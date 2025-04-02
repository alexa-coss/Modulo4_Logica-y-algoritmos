/*
  📌 Práctica 2. Estructuras de Datos
  Gestión de Lista de Compras
*/


/*
    Objetivo

El objetivo de este proyecto es permitir que los estudiantes practiquen conceptos básicos de cómo usar
Estructuras de datos sencillas como arreglos y objetos para la solición de problemas del mundo real con JavaScript.


Imagina que eres parte del equipo encargado de crear una lista de compras utilizando un arreglo. Los usuarios deben
poder añadir productos a la lista, eliminar productos y ver la lista completa de compras.

• Crea un arreglo vacío llamado listaDeCompras.
• Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
• Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
• Implementa una función mostrarLista() que imprima todos los productos de la lista.
• Asegúrate de que no haya productos duplicados en la lista.
• Puedes usar arrow functions para la funcionalidad solicitada así como otras características del estandar ECMAScript.
*/


// Crear un arreglo vacío para la lista de compras
let listaDeCompras = [];


// Función de agregar producto al final de la lista
const agregarProducto = () => {
    //// Obtener valores del formulario
    const nombre = document.getElementById("nombre").value.trim(); //.trim() - eliminar espacios innecesarios.
    const precio = parseFloat(document.getElementById("precio").value); // parseFloat() - para verlo como número y por si tiene decimales.
    const categoria = document.getElementById("categoria").value; // .value -> solo obtengo el valor (lo que está dentro del input).

    // Verificar valores vacíos o incorrectos
    if (!nombre || isNaN(precio) || !categoria) { // "nombre" y "precio" están vacíos y "precio" no es número.
        mostrarModal('Por favor, completa todos los campos para añadir un producto.');
        return;
    }

    // Crear un objeto producto
    const producto = { nombre, precio, categoria };

    // Verificar si el producto ya está en la lista
    const existe = listaDeCompras.some(p => p.nombre === producto.nombre);

    if (!existe) {
        listaDeCompras.push(producto);
        mostrarLista();
    } else {
        mostrarModal("Este producto ya está en la lista.");
    }
}


// Función de eliminar producto
const eliminarProducto = (index) => {
    listaDeCompras.splice(index,1);
    mostrarLista();
    mostrarModal("Este producto se eliminó de la lista.");
}


// Función de mostrar lista de compras
const mostrarLista = () => {
    const listaElement = document.getElementById('lista-compras');
    listaElement.innerHTML = ''; // Limpiar lista actual.

    // Recorrer lista y agregar productos
    listaDeCompras.forEach((producto, index) => {
        const li = document.createElement('li'); // Crear nuevo elemento li.
        li.innerHTML  = `${producto.nombre} - $${producto.precio} <br> <span class="categoria">| Categoría: ${producto.categoria}</span>`;

        // Button de eliminar (en cada producto)
        const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('eliminar'); // Agregar la clase 'eliminar'
            botonEliminar.onclick = () => eliminarProducto(index);

        li.appendChild(botonEliminar); // Agregar button al li.
        listaElement.appendChild(li); // Agregar el li en #lista-compras.

        // Verificar si el botón se está creando correctamente
        console.log(botonEliminar); // Debería imprimir el botón en la consola.
    });
}


// Función para mostrar el modal con el mensaje
const mostrarModal = (mensaje) => {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');

    modalText.textContent = mensaje; // Establecer mensaje.
    modal.style.display = 'block'; // Mostrar modal.
};


// Función para cerrar el modal
const cerrarModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Ocultar modal.
};


// Evento para manejar la adición de productos
document.getElementById('compras-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario (que se refresque la pantalla)

    agregarProducto();
    document.getElementById('compras-form').reset(); // Limpiar el formulario.
});