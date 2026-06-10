/* Repartiendo la cuenta: Un grupo de amigos va a cenar. 
El algoritmo debe pedir el costo total de la cena y la cantidad de personas. 
Luego, debe mostrar cuánto dinero debe pagar cada uno en partes iguales. */

const costoTotal = parseFloat(prompt("Ingrese el costo total de la cuenta."));
const cantidadPersonas = parseInt(
  prompt("Ingrese entre cuantas personas se dividira la cuenta."),
);
const costoPorPersona = costoTotal / cantidadPersonas;
alert(
  "Si el costo total es $" +
    costoTotal +
    ", cada persona debería abonar $" +
    costoPorPersona +
    ".",
);
