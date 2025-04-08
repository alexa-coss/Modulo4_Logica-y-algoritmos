/*
  📌 Práctica 6. Recursion y backtracking
  Buscar un objeto en una lista de regalos
*/


/*
    Objetivo

El objetivo es que se practique cómo usar recursión para buscar un objeto específico en un arreglo. Practicará cómo
dividir un problema en partes más pequeñas y detener la recursión en un caso base.


Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. La lista puede ser
bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. Este proyecto se enfoca únicamente
en usar recursión para buscar un elemento en un arreglo simple.

    Instrucciones para resolver el problema:
• Escribe una función recursiva que busque un regalo específico en un arreglo.
• Si el regalo se encuentra, devuelve un mensaje indicando su posición.
• Si no se encuentra, devuelve un mensaje diciendo que no está en la lista.
• Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en
    la siguiente url: https://gist.github.com/heladio-devf-mx/07642b0746bb8101258995f539ab372e

    Pistas:
• Usa un índice inicial (index = 0) para rastrear la posición en el arreglo.
• Implementa los casos base sugeridos:
• Si index === gifts.length, el regalo no está en la lista.
• Si gifts[index] === giftName, el regalo está en esa posición.
• Realiza una llamada recursiva aumentando el índice (index + 1).
*/


/*
  📌 Código base

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
  // TODO: Incluye el caso base donde se llega al final de la lista.
  // TODO: Incluye el caso base donde se encuentra el regalo.
  // TODO: Realiza la llamada recursiva para seguir buscando el regalo.
}
// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
// Salida esperada:
// "Camión no está en la lista."
*/


// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota", "Parchís", "Bufanda", "Dulces", "Taza"];

// Elementos donde se mostrará el resultado
const regaloElement = document.getElementById("regalo-navideno");
const posicionElement = document.getElementById("posicion-arreglo");
const posicionList = document.getElementById("posicion-regalo");

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        regaloElement.textContent = giftName;
        posicionElement.textContent = `${giftName} no está en la lista.`;
        posicionList.textContent = `${giftName} no está en la lista.`;
        document.getElementById("result").style.display = "block";
        return;
    }

    if (gifts[index] === giftName) {
        regaloElement.textContent = giftName; // Mostrar el nombre del regalo
        posicionElement.textContent = `${giftName} está en la posición ${index}.`; // Mostrar posición arreglo
        posicionList.textContent = `${giftName} está en la posición ${index + 1}.`; // Mostrar posición lista
        document.getElementById("result").style.display = "block";
        return;
    } else {
      return findGift(gifts, giftName, index+1)
    }
  // TODO: Incluye el caso base donde se llega al final de la lista.
  // TODO: Incluye el caso base donde se encuentra el regalo.
  // TODO: Realiza la llamada recursiva para seguir buscando el regalo.
}

    /* Para html */
// Mostrar regalos en HTML
const listaRegalosHTML = document.getElementById('lista-regalos');

// Función para agregar los invitados al HTML
function agregarRegalos(gifts) {
    gifts.forEach(gift => {
        const regaloElemento = document.createElement('li'); // Crear <li> para cada regalo.
        regaloElemento.textContent = gift; // Establecer el nombre del regalo en el <li>.
        listaRegalosHTML.appendChild(regaloElemento); // Agregar el <li> a la lista.
    });
}

// Llamada a la función para mostrar los regalos
agregarRegalos(gifts);

// Evento
document.getElementById('navideno-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario (que se refresque la pantalla)

    // Obtener valores del formulario
    const giftName = document.getElementById("regalo").value; // .value -> solo obtengo el valor (lo que está dentro del input).

    // Verificar valor vacíos
    if (!giftName) {
        mostrarModal('Por favor, selecciona un regalo para buscarlo en la lista.');
        return;
    }

    findGift(gifts, giftName);
    document.getElementById('navideno-form').reset(); // Limpiar el formulario.
});

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

/*
// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Camión no está en la lista."
*/
