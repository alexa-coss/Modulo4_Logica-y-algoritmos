// Importamos recetas desde un archivo externo simulado
import { getRecipes } from "./services/recipes.js";

// Verificamos que los datos recibidos sean un arreglo
const recetas = Array.isArray(getRecipes()) ? getRecipes() : [];

// Referencias a elementos del DOM
const input = document.getElementById("ingredient-input"); // Usuario escribe ingrediente.
const recipesContainer = document.getElementById("recipes"); // 
const sortSelect = document.getElementById("sort"); // Ordenar recetas por ...
const suggestionBtn = document.getElementById("suggestion-btn"); // Mostrar receta sugerida.

// Variables globales para autocompletado y análisis
let currentSuggestionIndex = -1;
let currentSuggestions = [];
let historialIngredientes = [];


// =============================================
// FUNCIÓN: Mostrar recetas en pantalla
// =============================================
function renderRecetas(lista) {
    recipesContainer.innerHTML = ""; // Limpiamos el contenedor

    lista.forEach((receta) => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
        <img src="${receta.imagen}" alt="${receta.nombre}" />
        <h3>${receta.nombre}</h3>
        <p><strong>Tiempo:</strong> ${receta.tiempo} min.</p>
        <p><strong>Porciones:</strong> ${receta.porciones ?? 'N/A'}</p>
        <p><strong>Dificultad:</strong> ${receta.dificultad}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul>
            ${receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
        </ul>
        <p><strong>Preparación:</strong></p>
        <p>${receta.pasos}</p>
      `;

        // Mostrar si existe "opcional"
        if (receta.opcional) {
            card.innerHTML += `<p><strong>Opcional:</strong> ${receta.opcional}</p>`;
        }

        // Mostrar si existe "nota"
        if (receta.nota) {
            card.innerHTML += `<p><strong>Nota:</strong> ${receta.nota}</p>`;
        }

        // Mostrar etiquetas al final
        card.innerHTML += `<p><strong>Etiquetas:</strong> ${receta.etiquetas.join(', ')}</p>`;


        recipesContainer.appendChild(card);
    });
}


// =============================================
// FUNCIÓN: Filtrar recetas por ingrediente
// =============================================
function buscarSubcaneda (text, ingredient) {
    /* Generar firma de ingredient a buscar */
    const firma = str => [...str].reduce((a, c) => a + c.charCodeAt(0), 0);
    const textLower = text.toLowerCase();
    const ingredientLower = ingredient.toLowerCase();
    const firmaTarget = firma(ingredientLower);

    const res = [];

    /* Recorrer por ventanas */
    for (let i = 0; i <= textLower.length - ingredientLower.length; i++) {

        const window = textLower.toLowerCase().slice(i, i + ingredientLower.length);

        /* Comparar firmas y si coincide comparamos palabra (evita falsos positivos como sol == los) */
        if (firma(window) === firmaTarget && window === ingredientLower) {
            res.push(i)
        }
    }
    return res;
}

function filtrarPorIngrediente(ingrediente) {
    const lower = ingrediente.toLowerCase();

    // TODO: Reemplazar .includes() con implementación manual de búsqueda de subcadenas (como KMP o recorrido carácter por carácter)
    /*
    return recetas.filter((receta) =>
        receta.ingredientes.some((ing) => ing.toLowerCase().includes(lower))
    );
    */
    return recetas.filter((receta) =>
        receta.ingredientes.some((ing) => buscarSubcaneda(ing, lower).length > 0)
    );
}


// =============================================
// FUNCIÓN: Actualizar historial y análisis
// =============================================
function actualizarHistorial(ingrediente) {
    historialIngredientes.push(ingrediente);

    // Sliding Window: mantenemos máximo 20 ingredientes
    if (historialIngredientes.length > 20) {
        historialIngredientes.shift();
    }

    // Mostrar en texto cuántos ingredientes únicos se han usado
    document.getElementById("analysis").textContent =
        `Usaste ${new Set(historialIngredientes).size} ingrediente${historialIngredientes.length > 1 ? 's' : ''} esta semana.`;

    actualizarSugerenciasRecientes();
}


// =============================================
// FUNCIÓN: Mostrar top ingredientes populares recientes (Sliding Window real)
// =============================================

// TODO: Sliding Window sobre últimas 5 búsquedas para encontrar ingredientes más frecuentes
function actualizarSugerenciasRecientes() {
    // Últimos 5 ingredeintees
    const cincoUltimos = historialIngredientes.slice(-5);

    // Contar frecuencia del ingrediente
    const contar = {};
    for (const ingrediente of cincoUltimos) {
        const lower = ingrediente.toLowerCase();
        contar[lower] = (contar[lower] || 0) + 1;
    }

    // Ordenar ingredientes por frecuencia
    const sugerencias = Object.entries(contar) // Convertir en array [['queso', 2], ['Plátano', 1]]
        .sort((a, b) => b[1] - a[1]) // De mayor a menor frecuencia
        .map(([nombre]) => nombre); // Solo obtener nombre

    // Mostrar sugerencias en el DOM (actualizar lista en HTML)
    const sugerenciasElemento = document.getElementById("recent-suggestions");
    sugerenciasElemento.innerHTML = ""; // Limpiar lista antes de agregar nuevas sugerencias

    // Agregar sugerencias más frecuentes como elementos <li>
    sugerencias.forEach(ing => {
        const li = document.createElement("li");
        li.textContent = ing;
        
        // Hacer cada sugerencia clickeable para filtrar recetas
        li.addEventListener("click", () => {
            document.getElementById("ingredient-input").value = ing;  // Completar campo de búsqueda
            filtrarPorIngrediente(ing); // Filtrar recetas
        });

        sugerenciasElemento.appendChild(li);
    });
}


// =============================================
// FUNCIÓN: Mostrar sugerencias de autocompletado
// =============================================
function autocompletar(valor) {
    const autocompletarDiv = document.getElementById("autocomplete-list");
    autocompletarDiv.innerHTML = ""; // Limpiar sugerencia anterior

    // Si no se ha escrito nada no devuelve nada
    if (!valor) return;

    currentSuggestions = [...new Set(recetas.flatMap(r => r.ingredientes))] // .flatMap() -> obtener todos los ingredientes en un arreglo | Set -> eliminar ingrediente repetido
        .filter((ing) => ing.toLowerCase().startsWith(valor.toLowerCase())) // Filtrar ingredientes | startsWith() -> verificar que ingrediente comienza con lo que escribe el usuario
        .slice(0, 5);

    currentSuggestionIndex = -1; // Inicializar sin ninguna sugerencia

    currentSuggestions.forEach((sug) => {
        const item = document.createElement("div"); // Crear div para el texto con sugerencia
        item.textContent = sug; // Asignar el valor de sug (ingrediente sugerido) al div creado
        item.classList.add("autocomplete-item"); // añadir clases CSS al elemento
        item.onclick = () => {
            input.value = sug; // Al hacer click en una sugerencia, esa se pone en el campo de búsqueda
            input.focus(); // Después del click se puede seguir escribiendo
        };
        autocompletarDiv.appendChild(item); // Añadir cada sugerencia (item) al contenedor de sugerencias
    });
}


// =============================================
// FUNCIÓN: Buscar recetas y mostrarlas
// =============================================
function buscarYRenderizar() {
    const valor = input.value.trim(); // .trim() -> eliminar espacios en blanco al inicio y final
    if (!valor) return; // Si esta vacío no hace nada

    const resultados = filtrarPorIngrediente(valor); // Guardar recetas con ese ingrediente
    actualizarHistorial(valor);
    renderRecetas(resultados);
}


// =============================================
// FUNCIÓN: Ordenar recetas por name, time, portions or difficulty
// =============================================
function ordenarRecetas(tipo) {
    let ordenadas = [...recetas];

    /*
    if (tipo === "time") {
        // TODO: Reemplazar .sort() por una implementación manual de Merge Sort (crear función mergeSort())
        ordenadas.sort((a, b) => a.tiempo - b.tiempo);
    } else {
        // TODO: Reemplazar .sort() por una implementación manual de ordenamiento alfabético (merge sort)
        ordenadas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    */

    // Convertir difficulty a números
    if (tipo === "difficulty") {
        const Orden = { // Asignar valor numerico
            "Fácil": 1,
            "Media": 2,
            "Difícil": 3
        };

        // Aplicar conversión en todo el arreglo
        ordenadas = ordenadas.map(r => ({
            ...r,
            dificultadNum: Orden[r.dificultad] // Convertir dificultad a número
        }));
    }

    ordenadas = mergeSort (ordenadas, tipo);

    renderRecetas(ordenadas);
}

// Merge Sort para dividirlo hasta el caso base, juntarlos con su respectivo merge usando recursión
function mergeSort (arr, tipo) {
    // Si el arreglo tiene 1 elemento o ninguno, ya está ordenado.
    if (arr.length <= 1) return arr;

    // Dividir arreglo en dos y ordenarlas recursivamente (se llama a sí misma)
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0,middle), tipo);
    const right = mergeSort(arr.slice(middle), tipo);

    // Juntar mitades ordenadas usando merge
    if (tipo === "name") {
        return mergeName(left, right);
    } else if (tipo === "time") {
        return mergeNum(left, right, 'tiempo');
    } else if (tipo === "portions") {
        return mergeNum(left, right, 'porciones');
    } else {
        return mergeNum(left, right, 'dificultadNum');
    }
}

// Ordenar por name (alfabéticamente)
function mergeName (left, right) {
    const result = []
    let i=0, j=0;

    while (i < left.length && j < right.length) { // Asegurar que tenemos elementos a comparar
        if (left[i].nombre.localeCompare(right[j].nombre) < 0) { // (-) Left va antes que rigth
            result.push(left[i++]); // Agregro al final y avanzo uno
        } else { // (+) Rigth va antes que left (o son iguales)
            result.push(right[j++]); // Agregro al final y avanzo uno
        }
    }
    
    /* Si quedan elementos sin comparar (porque una mitad era más larga), los agregamos al final */
    return [...result, ...left.slice(i), ...right.slice(j)]
}

// Ordenar de menor a mayor
function mergeNum (left, right, tipo) {
    const result = []
    let i=0, j=0;
    const highValue = Number.MAX_VALUE; // Valor suficientemente alto para quedar al final

    while (i < left.length && j < right.length) { // Asegurar que tenemos elementos a comparar
        // Asegurar que los valores se comparan correctamente
        let leftValue = left[i][tipo];
        let rightValue = right[j][tipo];

        // Si el valor es 'undefined' (N/A), reemplazar por highValue
        if (leftValue === undefined) leftValue = highValue;
        if (rightValue === undefined) rightValue = highValue;

        // console.log(`Comparando: ${leftValue} vs ${rightValue}`); // -> Verificar código

        if (leftValue < rightValue) { // (true) Left va antes que rigth
            result.push(left[i++]); // Agregar al final y avanzo uno
        } else { // (false) Rigth va antes que left (o son iguales)
            result.push(right[j++]); // Agregar al final y avanzo uno
        }
    }
    
    /* Si quedan elementos sin comparar (porque una mitad era más larga), los agregamos al final */
    return [...result, ...left.slice(i), ...right.slice(j)]
}


// =============================================
// FUNCIÓN: Resaltar sugerencia seleccionada
// =============================================
function highlightSuggestion(items) {
    items.forEach((item, index) => {
        // Si el índice del elemento actual es igual al índice de la sugerencia seleccionada se resalta ese elemento.
        item.classList.toggle("active", index === currentSuggestionIndex); // .classList.toggle("active", condition) -> true agrega la clase, false se elimina.
    });
}


// =============================================
// EVENTO: Cuando el usuario escribe en el input
// =============================================
input.addEventListener("input", (e) => {
    const value = e.target.value.trim(); // e.target.value obtener valor actual del campo de texto donde se está escribiendo.
    autocompletar(value); // Solo muestra sugerencias

    if (!value) {
        renderRecetas(recetas); // Si está vacío, mostrar todas
    }
});


// =============================================
// EVENTO: Teclado para navegar sugerencias
// =============================================
input.addEventListener("keydown", (e) => { // Presionar una tecla en el campo de entrada (input)
    const items = document.querySelectorAll(".autocomplete-item"); // Obtiener todas las sugerencias de autocompletado

    if (e.key === "ArrowDown") {
        e.preventDefault(); // Previene el desplazamiento por defecto del navegador
        if (currentSuggestionIndex < items.length - 1) { // Verificar si el índice actual de la sugerencia seleccionada es menor que el número total de sugerencias (no llegar al final de la lista)
            currentSuggestionIndex++; // Se mueve hacia abajo, seleccionando la siguiente sugerencia
            highlightSuggestion(items); // Resaltar la sugerencia correspondiente de acuerdo con el índice actualizado
        }
    } else if (e.key === "ArrowUp") {
        e.preventDefault(); // Previene el desplazamiento por defecto del navegador
        if (currentSuggestionIndex > 0) {  // Verificar si el índice actual de la sugerencia seleccionada es mayor que 0 (no es la primera de la lista)
            currentSuggestionIndex--; // Se mueve hacia arriba, seleccionando la sugerencia anterior
            highlightSuggestion(items); // Resaltar la sugerencia correspondiente de acuerdo con el índice actualizado
        }
    } else if (e.key === "Enter") { // Al presionar tecla Enter con una sugerencia seleccionada
        if (currentSuggestionIndex >= 0 && items[currentSuggestionIndex]) { // true -> existe
            input.value = items[currentSuggestionIndex].textContent; // Asignar el texto de la sugerencia seleccionada al valor del campo de entrada
            document.getElementById("autocomplete-list").innerHTML = ""; // Ñimpiar lista de sugerencias para ocultar sugerencias restantes después de seleccionar una
        }
        buscarYRenderizar(); // Ejecuta búsqueda
    }
});


// =============================================
// EVENTO: Selección con el mouse en sugerencias
// =============================================

document.getElementById("autocomplete-list").addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("autocomplete-item")) {
        input.value = e.target.textContent; // Asignar el texto de la sugerencia seleccionada al campo de entrada
        document.getElementById("autocomplete-list").innerHTML = ""; // Limpiar lista de sugerencias
        buscarYRenderizar(); // Ejecutar búsqueda automáticamente
    }
});


// =============================================
// EVENTO: Cambiar tipo de ordenamiento
// =============================================
sortSelect.addEventListener("change", (e) => ordenarRecetas(e.target.value));


// =============================================
// EVENTO: Mostrar la receta más rápida
// =============================================
suggestionBtn.addEventListener("click", () => {
    /*
    // TODO: Reemplazar .reduce() con una implementación manual de Greedy para encontrar el menor tiempo
    const recetaMasRapida = recetas.reduce((a, b) => a.tiempo < b.tiempo ? a : b);
    renderRecetas([recetaMasRapida]);
    */
    const recetaMasRapida = lessTimeGreedy(recetas);
    renderRecetas([recetaMasRapida]);
});

// Encontrar menor tiempo (Greedy)
function lessTimeGreedy(list) {
    let less = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i].tiempo < less.tiempo) { // Si lista tiene menor tiempo
            less = list[i] // Guardarlis lista en less
        }
    }

    return less;
}


// =============================================
// Render inicial de todas las recetas
// =============================================
renderRecetas(recetas);