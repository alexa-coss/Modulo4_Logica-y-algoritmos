/*
  📌 Práctica 3. Métodos de Arreglos
  Filtro y Orden de Productos de una Tienda Online
*/


/*
    Objetivo

El objetivo de este proyecto es permitir que los estudiantes practiquen cómo aplicar algunos de los métodos de arreglos más usados en JavaScript. En particular practicar los métodos filter(), sort(), y map() para manipular datos de un arreglo.


Eres el encargado de gestionar los datos de una tienda online. Tienes un listado de productos con información
como nombre, precio y categoría. Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y
generar una lista con los nombres.

• Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
    Puedes ver el código de ejemplo para este paso en el siguiente enlace:
    https://gist.github.com/heladio-devf-mx/a2127c7992384fd0fd66893db47ea506
• Usa filter() para obtener los productos que cuesten menos de $100.
• Usa sort() para ordenar esos productos alfabéticamente por su nombre.
• Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
• Muestra los resultados de la aplicación de cada métiodo en consola.
• (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso
    en este ejemplo, usa tu creatividad.
*/


//arreglo de objetos (al menos 5 productos), propiedades: nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 250, categoria: "Ropa" },
    { nombre: "Laptop", precio: 25000, categoria: "Técnología" },
    { nombre: "Libro", precio: 300, categoria: "Otro" },
    { nombre: "Zapatos", precio: 150, categoria: "Calzado" },
    { nombre: "Celular", precio: 20000, categoria: "Técnología" },
    { nombre: "Manzanas", precio: 15, categoria: "Alimentos" },
    { nombre: "Vela", precio: 50, categoria: "Hogar" },
    { nombre: "Crema", precio: 67, categoria: "Personal" },
    { nombre: "Martillo", precio: 50, categoria: "Herramientas" },
    { nombre: "Esponja", precio: 20, categoria: "Limpieza" }
];


// filter() obtener productos con costo menor a $100.
document.getElementById('filter').addEventListener('click', function() {
    const precioMenor = productos.filter(producto => producto.precio < 100);
    document.getElementById('filter-result').textContent = `${precioMenor.map(p => p.nombre).join(', ')}`;
});

// sort() ordenar productos alfabéticamente por su nombre.
document.getElementById('sort').addEventListener('click', function() {
    const ordenarAlfa = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    document.getElementById('sort-result').textContent = `${ordenarAlfa.map(p => p.nombre).join(', ')}`;
});

// map() generar nuevo arreglo solo nombres de los productos.
document.getElementById('map').addEventListener('click', function() {
    const arrayNames = productos.map(producto => producto.nombre);
    document.getElementById('map-result').textContent = `${arrayNames.join(', ')}`;
});


// Muestra resultados de la aplicación de cada método en consola.


// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.), usa tu creatividad.

    // reduce() calcular el precio total con un 10% de descuento en cada producto
document.getElementById('reduce').addEventListener('click', function() {
    const descuento = 0.10;
    const precioDescuento = productos.reduce((total, producto) => {
        return total + producto.precio * (1 - descuento);
    }, 0);
    document.getElementById('reduce-result').textContent = `$${precioDescuento.toFixed(2)}`;
});

    // find() encontrar el primer producto con precio igual o mayor a $10,000
document.getElementById('find').addEventListener('click', function() {
    const primerProducto = productos.find(producto => producto.precio >= 10000);
    document.getElementById('find-result').textContent = primerProducto 
        ? `${primerProducto.nombre}, $${primerProducto.precio}` 
        : "No se encontró ningún producto con precio mayor o igual a $10,000.";
});


    // some() revisar que siempre tengamos al menos un producto en la categoría "Otro"
document.getElementById('some').addEventListener('click', function() {
    const productoOtro = productos.some(producto => producto.categoria === "Otro");
    document.getElementById('some-result').textContent = `${productoOtro ? "Sí" : "No"}`;
});


    // every() verificar que todos los productos tiene precio
document.getElementById('every').addEventListener('click', function() {
    const precioVerificado = productos.every(producto => producto.precio > 0);
    document.getElementById('every-result').textContent = `${precioVerificado ? "Sí" : "No"}`;
});


    // forEach() mostrar la lista de productos
document.getElementById('forEach').addEventListener('click', function() {
    const listaProductos = productos.map(producto => `${producto.nombre}, $${producto.precio} | ${producto.categoria}`).join('<br>');
    document.getElementById('forEach-result').innerHTML = `Lista de productos:<br>${listaProductos}`;
});


    /* Para html */
// Mostrar productos en HTML
const listaProductosHTML = document.getElementById('lista-productos');

// Recorrer el arreglo de productos y agregar cada uno al <ul>
productos.forEach(producto => {
    const li = document.createElement('li'); // Crear el elemento <li> para cada producto.
    li.textContent = `${producto.nombre} - $${producto.precio} | Categoría: ${producto.categoria}`;
    
    listaProductosHTML.appendChild(li); // Agregar el <li> al <ul>.
});