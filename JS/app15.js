//VOTACIONES ELECCIONES

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >=18) {
    console.log("Usted puede votar en las próximas elecciones");
}

if (edad<18) {
    console.log("Usted no puede votar en las próximas elecciones");
}