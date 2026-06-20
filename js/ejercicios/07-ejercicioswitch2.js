/* Una tienda de mascotas ofrece descuentos especiales según el tipo de 
animal para el que se compren productos. Pero hay una condición: 
el descuento solo se aplica si el cliente es miembro del club de 
fidelidad de la tienda.  Crea un programa que tenga las variables: 
esMiembro (verdadero/falso) y tipoMascota ("perro", "gato", "ave")
Si el cliente no es miembro, el programa debe avisar que no tiene descuento (0%).
Si el cliente sí es miembro, se usa un switch para asignar el descuento: 
Perros = 15%, Gatos = 10%, Aves = 5%. Cualquier otra mascota no tiene descuento.
Al final, el programa debe mostrar el porcentaje de descuento obtenido.
 */

let esMiembro = prompt(
  "Pertenece al club de fidelidad de la tienda? Responda: Si o No",
).toLowerCase();
let descuento = "";
while (esMiembro !== "si" && esMiembro !== "no") {
  alert("Por favor ingrese una respuesta válida");
  esMiembro = prompt(
  "Pertenece al club de fidelidad de la tienda? Responda: Si o No",
).toLowerCase();
}
if (esMiembro === "si") {
  const tipoMascota = prompt(
    "Que tipo de mascota tiene? #Perro #Gato #Ave",
  ).toLowerCase();
  switch (tipoMascota) {
    case "perro":
      alert("Por ser miembro, los perros tienen %15 de descuento en la tienda");
      descuento = "%15";
      break;
    case "gato":
      alert("Por ser miembro, los gatos tienen %10 de descuento en la tienda");
      descuento = "%10";
      break;
    case "ave":
      alert("Por ser miembro, las aves tienen %5 de descuento en la tienda");
      descuento = "%5";
      break;
    default:
      alert(
        "Lo sentimos, aun no contamos con descuentos para tu tipo de mascota. Gracias por pertenecer al Club",
      );
      descuento = "%0";
  }
} else {
  alert("Para obtener descuentos recuerde unirse a nuestro Club de fidelidad!");
  descuento = "%0";
}
alert(
  "El descuento total que se aplicara a su compra es de: " +
    descuento +
    ". Gracias por elegirnos!",
);
