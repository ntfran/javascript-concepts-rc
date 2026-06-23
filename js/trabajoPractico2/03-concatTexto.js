/* Realiza un script que pida cadenas de texto 
 hasta que se pulse “cancelar”. 
 Al salir con “cancelar” deben mostrarse 
 todas las cadenas concatenadas con un guión -. */

let resultado = "";
do {
  let palabra = prompt("Ingrese un texto");
  if (palabra !== null && palabra !== "") {
    resultado += palabra + " - ";
  }
} while (confirm("Desea ingresar mas texto?"));
alert(resultado.slice(0, -2));
