/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let sumaTotal = 0;
let numeroIngresado;
do {
  numeroIngresado = prompt("Ingrese un numero o presione cancelar para salir");
  if(numeroIngresado !== null){
    while (isNaN(numeroIngresado) && numeroIngresado !== null) {
    alert("Ingrese un numero válido.");
    numeroIngresado = prompt("Ingrese un numero");
  }
  if(numeroIngresado !== null){
    sumaTotal += parseFloat(numeroIngresado)
  }
  }
}while(numeroIngresado != null);
alert(`La suma total de los numeros ingresados es: ${sumaTotal}`)