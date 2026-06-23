/*  Crea script para generar pirámide siguiente
 con los números del 1 al número que indique el usuario (no mayor de 50)  */
let numeroLimite = prompt(
  "Ingresar un número del 1 al 50 para armar la pirámide:",
);
if (input !== null) {
  while (
    isNaN(numeroLimite) ||
    numeroLimite === "" ||
    numeroLimite < 1 ||
    numeroLimite > 50
  ) {
    alert("Ingrese un número válido entre 1 y 50.");
    numeroLimite = prompt("Ingrese un número del 1 al 50:");
  }
  if (numeroLimite !== null) {
    numeroLimite = parseInt(numeroLimite);
    for (let fila = 1; fila <= numeroLimite; fila++) {
      for (let columna = 1; columna <= fila; columna++) {
        document.write(fila);
      }
      document.write("<br>");
    }
  }
}
