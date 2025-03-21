// Soluciones de compañeros


/*
Solución 1

class travel {
    constructor(from, to, price) {
        this.from = from
        this.to = to
        this.price = price
    }
}

class usuario{
    constructor(name, lastName, age) {
        this.name = name
        this.lastName = lastName
        this.age = age 
        this.tickets = []
    }

    getName(){
        return this.name
    }

    getLastName(){
        return this.lastName
    }

    getAge(){
        return this.age
    }

    setName(name) {
        this.name = name
    }

    setLastName(lastName) {
        this.lastName = lastName
    }

    setAge(age) {
        this.age = age
    }

    buyTicketTravel(){
        console.log("Ticket bought")
    }

    cancelTicketTravel(){
        console.log("Ticket canceled")
    }

    addTicketTravel(travel){
        this.tickets.push(travel)
    }
}
*/


/*
Solución 2

class Usuario{
 constructor(nombre, edad, appad, apmad, noDeCuenta){
 this.nombre = nombre;
 this.edad = edad;
 this.appad = appad;
 this.apmad = apmad;
 this.noDeCuenta = noDeCuenta;
 }
comprarVuelo(id, costo){
console.log(`
 Nombre usuario: ${this.nombre}
 No. De Cuenta: ${this.noDeCuenta}
 Costo total: $${costo}
 `);
 }
cancelarVuelo(costo){
console.log(`
 Nombre usuario: ${this.nombre}
 ID de vuelo: ${id}
 Reembolso al No. de Cuenta: ${this.noDeCuenta};
 Costo: $${costo}
 `);
 }
}
*/


/*
Solución 3

class user{
    constructor(nombre, apellido, edad, direccion,nacionalidad, numTelefono, numeroPersona, fechaReserva, fechaSalida, fechaLlegada, numHabitacion,numDias){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.nacionalidad = nacionalidad;
        this.numTelefono = numTelefono;
        this.numeroPersona = numeroPersona;
        this.fechaReserva = fechaReserva;
        this.fechaSalida = fechaSalida;
        this.fechaLlegada = fechaLlegada;
        this.numHabitacion = numHabitacion;
        this.numDias = numDias;
    }
getDatos(){
        return `Nombre: ${this.nombre} ${this.apellido}\nEdad: ${this.edad}\nDireccion: ${this.direccion}\nNacionalidad: ${this.nacionalidad}\nNumero de telefono: ${this.numTelefono}`;
    }
    getNationality(){
        const categoriNacionalidad = this.nacionalidad == "mexicana" ? "Mexicana" : "Extranjera";
        return `Nacionalidad: ${this.nacionalidad}`;
    }
    getReservar(){
        let categoria = this.edad >= 30 ? "Adulto" : "Joven";
        return `El ${categoria} ${this.nombre} ${this.apellido} con nacionalidad ${this.nacionalidad} ha reservado la habitacion ${this.numHabitacion} por ${this.numDias} dias, para ${this.numeroPersona} personas, con fecha de llegada ${this.fechaLlegada} y fecha de salida ${this.fechaSalida}`;
    }
}
*/