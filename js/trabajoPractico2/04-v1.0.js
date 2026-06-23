/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let sumaTotal = 0;
let numeroIngresado;
do {
  numeroIngresado = prompt("Ingrese un numero");
  console.log(numeroIngresado);
  while (isNaN(numeroIngresado)) {
    alert("Ingrese un numero válido.");
    numeroIngresado = prompt("Ingrese un numero");
  }
  /* Tuve que convertir aqui a parseFloat, ya que antes podia devolver NaN
  en lugar de null y eso hacia loop infinito. */
  numeroIngresado = parseFloat(numeroIngresado);
  sumaTotal += numeroIngresado;
} while (numeroIngresado !== null);
alert(sumaTotal);

