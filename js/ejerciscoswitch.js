/* Un estacionamiento público cobra una tarifa fija dependiendo del tipo 
de vehículo que ingrese. Sin embargo, tienen una regla especial: 
los domingos el estacionamiento es completamente gratis para todos. 
Crea un programa que solicite el día de la semana y el tipo de vehículo 
(1: Motocicleta, 2: Auto, 3: Autobús). */

/* Si el día es "Domingo", el programa debe mostrar que el costo es $0.
Si es cualquier otro día, debe usar una estructura switch para calcular el costo según el vehículo: 
Motocicleta = $5, Auto = $10, Autobús = $20.
Si ingresan un tipo de vehículo no válido, debe mostrar un mensaje de error. */

const tarifaMotocicleta = "5";
const tarifaAuto = "10";
const tarifaAutoBus = "20";

const dia = prompt("Ingrese el día de la semana:").toLowerCase();

if (dia === "domingo") {
  alert("¡Hoy es domingo! El estacionamiento es gratis.");
} else if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes" ||
  dia === "sabado"
) {
  alert(`Las tarifas son las siguientes Motocicletas $${tarifaMotocicleta}
        , Auto$${tarifaAuto}, Autobus$${tarifaAutoBus}`);
  const tipoVehiculo = prompt(
    "Seleccione su tipo de vehiculo: #Opcion.1 Motocicleta #Opcion.2 Auto #Opcion.3 Autobús",
  ).toLowerCase();

  switch (tipoVehiculo) {
    case "1":
      alert(`Debe abonar $${tarifaMotocicleta}.`);
      break;
    case "2":
      alert(`Debe abonar $${tarifaAuto}.`);
      break;
    case "3":
      alert(`Debe abonar $${tarifaAutoBus}.`);
      break;
    default:
      alert("Seleccione una opcion correcta");
  }
} else {
  alert("Ingrese un día de la semana válido");
}
