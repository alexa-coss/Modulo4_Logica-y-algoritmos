export const getRecipes = () => [
    {
        nombre: "Ensalada César",
        ingredientes: ["Mix de lechugas", "Crutones", "Queso parmesano", "Aderezo César"],
        pasos: "Mezcla los ingredientes y añade el aderezo.",
        categoria: "Comida",
        tiempo: 15,
        imagen: "https://media.istockphoto.com/id/1337799015/es/foto/ensalada-c%C3%A9sar.jpg?s=612x612&w=0&k=20&c=4sDhC8H3-3wjNXwQds6Zqo1zJrGd6445fi-IGOaa2dM=",
        porciones: 2,
        nota: "Agrega el queso parmesano rayado hasta el final y encima de la ensalada.",
        dificultad: "Media",
        etiquetas: ["saludable", "sin carne", "salado"]
    },
    {
        nombre: "Hotcakes de avena",
        ingredientes: ["Avena", "Huevo", "Leche", "Plátano", "Aceite de coco"],
        pasos: "Licua 1 taza de hojuelas de avena, agrega 1 huevo, 1 taza de leche y 1 plátano. Deja reposar 30 minutos y cocina en sartén con aceite de coco.",
        opcional: "Servir con fruta, untables o jarabes",
        categoria: "Desayuno",
        tiempo: 45,
        imagen: "https://www.cocinadelirante.com/sites/default/files/images/2018/10/hot-cakes-de-avena-saludables.jpeg",
        porciones: 4,
        nota: "Agregar un poco de polvo para hornear a la mezcla para que sean esponjosos.",
        dificultad: "Media",
        etiquetas: ["saludable", "sin carne", "dulce"]
    },
    {
        nombre: "Smoothie de plátano",
        ingredientes: ["Plátano", "Leche", "Endulzante", "Hielo"],
        pasos: "Licúa 1 plátano y 1 taza de leche con endulzante y 1/2 taza de hielo hasta obtener una mezcla homogénea.",
        opcional: "Servir con toppings o jarabes",
        categoria: "Bebida",
        tiempo: 5,
        imagen: "https://scitechdaily.com/images/Banana-Smoothie.jpg",
        porciones: 1,
        nota: "Puedes cambiar el plátano por tu fruta de preferencia.",
        dificultad: "Fácil",
        etiquetas: ["saludable", "sin carne", "dulce"]
    },
    {
        nombre: "Frappe de café",
        ingredientes: ["Espresso", "Leche", "Endulzante", "Hielo"],
        pasos: "Licúa 1 shot de espresso y 1 taza de leche con endulzante y 1/2 taza de hielo hasta obtener una mezcla homogénea.",
        opcional: "Servir con toppings o jarabes",
        categoria: "Bebida",
        tiempo: 5,
        imagen: "https://www.cafedeljardin.com/wp-content/uploads/2023/07/Cafe-Frappe.jpg",
        porciones: 1,
        nota: "Puedes cambiar el café por tu sabor de preferencia.",
        dificultad: "Fácil",
        etiquetas: ["sin carne", "dulce"]
    },
    {
        nombre: "Affogato",
        ingredientes: ["Espresso", "Helado"],
        pasos: "Servir una bola de helado en una taza y agregar el shot de espresso.",
        categoria: "Postre",
        tiempo: 5,
        imagen: "https://static01.nyt.com/images/2021/08/15/magazine/affogato/affogato-mediumSquareAt3X-v2.jpg",
        porciones: 1,
        nota: "El helado es de vainilla, puedes cambiar el sabor o agragar un poco de licor de tu preferencia.",
        dificultad: "Fácil",
        etiquetas: ["sin carne", "dulce"]
    },
    {
        nombre: "Flautas ahogadas en salsa verde",
        ingredientes: ["Tortillas", "Pechuga de pollo", "Tomates", "Chiles", "Ajo", "Cebolla", "Sal", "Lechuga", "Crema", "Queso canasto"],
        pasos: "Cocer 1/4 kilo de tomates y chiles, posteriormente licuar con 1 ajo y 1/4 de cebolla, verter la mezcla en una olla, agregar sal y cocinar. Hacer las 6 flautas y dorarlas al gusto. Servir las flautas, ahogarlas en salsa, agregar lechuga picada, pollo deshebrado, crema y queso canasto rayado.",
        categoria: "Comida",
        tiempo: 60,
        imagen: "https://cdn0.recetasgratis.net/es/posts/7/4/2/flautas_ahogadas_76247_600_square.jpg",
        porciones: 2,
        nota: "Puedes acompañarlas con frijoles refritos y cambiar el pollo por otra carne o papa.",
        dificultad: "Media",
        etiquetas: ["pollo", "salado"]
    },
    {
        nombre: "Champiñones rellenos y gratinados al horno",
        ingredientes: ["Champiñones", "Queso crema", "Espinaca", "Ajo", "Cebolla en polvo", "Queso manchego"],
        pasos: "Mezclar el queso crema con espinaca picada, 1/2 ajo picado y cebolla en polvo. Quitar el tronco a los 10 champiñones y rellenarlos con la mezcla, poner queso rayado encima. Hornear hasta gratinar el queso.",
        opcional: "Agregar crema a la mezcla para lograr una buen consistencia",
        categoria: "Cena",
        tiempo: 30,
        imagen: "https://buscatureceta.com.es/wp-content/uploads/2022/04/champinones-rellenos-de-espinacas-y-requeson-4.jpg",
        porciones: 2,
        dificultad: "Media",
        etiquetas: ["saludable", "sin carne", "salado"]
    },
    {
        nombre: "Fajitas de pollo con calabaza y zanahoria",
        ingredientes: ["Pechuga de pollo", "Calabaza", "Zanahoria", "Ajo y cebolla en polvo", "Pimineta en polvo", "Sal"],
        pasos: "Dorar 1/2 pechuga de pollo en fajitas en un sartén, agregar las verduras picadas en tiras, sal, pimienta, ajo y cebolla en polvo. Revolver ocasionalmente hasta qeu las verduras estén cocidas.",
        categoria: "Comida",
        tiempo: 30,
        imagen: "https://www.elplandetuvida.es/images/WOK_WEB.jpg",
        porciones: 3,
        dificultad: "Media",
        etiquetas: ["saludable", "pollo", "salado"]
    },
    {
        nombre: "Mermelada de fruta natural",
        ingredientes: ["Fruta", "Endulzante", "Agua"],
        pasos: "Retirar semillas o cáscara a la fruta según sea el caso y aplastar lo más posible la fruta. Poner en un sartén con un poco de endulzante y agua, revolver  un poco hata que hierva. Apagar y utilizar caliente o fría o guardar.",
        opcional: "Agregar jugo de limón para mejor conservación.",
        categoria: "Complemento",
        tiempo: 15,
        imagen: "https://i.pinimg.com/736x/28/17/7e/28177e868f460c4f5548b90355c47488.jpg",
        nota: "Puedes ser la fruta de tu de preferencia.",
        dificultad: "Fácil",
        etiquetas: ["saludable", "dulce"]
    },
    {
        nombre: "Crepas de avena",
        ingredientes: ["Avena", "Leche", "Huevo", "Mantequilla"],
        pasos: "Licuar la 1 1/2 tazas de avena, agregar 2 tazas de leche, 2 huevos. Deja reposar 10 minutos y cocina en sartén con mantequilla.",
        opcional: "Servir con fruta, untables, jarabes o productos salados",
        categoria: "Complemento",
        tiempo: 15,
        imagen: "https://www.vidactual.com/rcpmaker/wp-content/uploads/2018/10/Crepas-de-avena-500x500.jpg",
        dificultad: "Fácil",
        etiquetas: ["saludable", "sin carne", "dulce", "salado"]
    },
    {
        nombre: "Papas hash browns",
        ingredientes: ["Papa", "Queso", "Aceite"],
        pasos: "Pelar 1/4 de kilo de papas y rayarlas. Con servilleta retirar el exceso de agua de la papa rallada. Revolver con queso que se pueda fundir. Calentar poquito aceite, poner un poco de la mezcla y aplastar con el volteador. Cocinar hasta llegar al dorado deseado, voltear y repetir. Servir.",
        opcional: "Agregar un recipiente con una pequeña porción de crema.",
        categoria: "Comida",
        tiempo: 30,
        imagen: "https://cdn.prod.website-files.com/6421ce75be42e6b8e2158e40/64c42bfff4bbf900dc671440_64bf3e1dd85401d13eefe23e_picture%2520(2).webp",
        porciones: 3,
        dificultad: "Fácil",
        etiquetas: ["saludable", "sin carne", "salado"]
    },
    {
        nombre: "Pechuga con mole y arroz con plátanos fritos",
        ingredientes: ["Pechuga de pollo", "Mole", "Caldo de pollo", "Queso manchego", "Plátano macho", "Arroz", "Ajo", "Cebolla", "Agua", "Sal", "Aceite"],
        pasos: "Enjuagar 1/2 taza de arroz. Calentar aceite en un sartén, agregar el arroz y dorarlo hasta que empiece a cambiar de color. Mientras tanto, licuar 1/2 taza de agua con 1 ajo, 1/4 de cebolla y sal (la mezcla debe quedar ligeramente salada). Una vez dorado el arroz, agregar la mezcla licuada. Cuando hierva, añadir 1 taza de agua, tapar y cocinar durante 30 minutos a fuego bajo.\nAgregar el mole en polovo con caldo de pollo y sal al gusto en un sartén. Revolver ocasionalmente hasta obtener la consistencia deseada. Una vez que hierva, está listo.\nFreír las 3 pechugas de pollo con poco aceite, poner una rebana de queso manchego arriba y los 2 plátanos machos.\nServir la pechuga con un poco de mole encima. Acompañar con arroz y plátanos fritos.",
        opcional: "Agregar un recipiente con una pequeña porción de crema.",
        categoria: "Comida",
        tiempo: 30,
        imagen: "https://vips.com.mx/menu/img/platos/pechuga_mixteca.jpg",
        porciones: 3,
        dificultad: "Difícil",
        etiquetas: ["saludable", "pollo", "salado"]
    }
];