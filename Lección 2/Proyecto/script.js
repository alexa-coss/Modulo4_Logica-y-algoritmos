/*
  📌 Práctica 2. Estructuras de Datos
  Gestión de Lista de Compras
*/


/*
    Objetivo

El objetivo de este proyecto es permitir que los estudiantes practiquen conceptos básicos de cómo usar
Estructuras de datos sencillas como arreglos y objetos para la solición de problemas del mundo real con JavaScript.

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
const agregarProducto = (producto) => {
    // Verificar si el producto ya está en la lista
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        mostrarLista(); // Actualizar lista.
    } else {
        mostrarModal("Este producto ya está en la lista.");
    }
}


// Función de eliminar producto
const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto); // Buscamos el índice.
    if(index !== -1){ // Si existe el elemento.
        listaDeCompras.splice(index,1); // Eliminamos por índice.
        mostrarModal(`Producto "${producto}" eliminado.`);
        mostrarLista(); // Actualizar lista.
    } else {
        mostrarModal("Este producto no está en la lista.");
    }
}


// Función de mostrar lista de compras
const mostrarLista = () => {
    const listaElement = document.getElementById('lista-compras');
    listaElement.innerHTML = ''; // Limpiar lista actual.

    // Recorrer lista y agregarlos
    listaDeCompras.forEach((producto) => {
        const li = document.createElement('li'); // Crear nuevo elemento li.
        li.textContent = producto; // Asigna nombre del producto como texto dentro del <li>.
        listaElement.appendChild(li); // Agregar el li en #lista-compras.
    });
}


// Evento para manejar la adición de productos
document.getElementById('compras-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario (que se refresque la pantalla).

    // Obtener valores del formulario
    const nombreProducto = document.getElementById('nombre').value;
    const precioProducto = document.getElementById('precio').value;
    const categoriaProducto = document.getElementById('categoria').value;

    if (nombreProducto && precioProducto && categoriaProducto) { // Verificar que todos los campos tengan un valor.
        const producto = `${nombreProducto} - $${precioProducto} | Categoría: ${categoriaProducto}`;
        agregarProducto(producto); // Agregar producto a la lista.

        // Limpiar los campos después de agregar producto
        document.getElementById('nombre').value = '';
        document.getElementById('precio').value = '';
        document.getElementById('categoria').value = '';
    } else {
        alert('Por favor, completa todos los campos para añadir un producto.');
    }
});