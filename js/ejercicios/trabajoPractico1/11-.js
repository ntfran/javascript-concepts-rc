/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los 
cuatro es divisible (hay que decir todos por los que es divisible) */
const num = parseInt(
  prompt("Ingrese un numero para saber si es divisible por 2, 3, 5 o 7"),
);
let divisores = "";
if (isNaN(num)) {
  alert("Por favor, ingrese solo números válidos");
} else {
  /* if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) */
  if (num % 7 === 0) {
    divisores = divisores + "7, ";
  }
  if (num % 5 === 0) {
    divisores = divisores + "5, ";
  }
  if (num % 3 === 0) {
    divisores = divisores + "3, ";
  }
  if (num % 2 === 0) {
    divisores = divisores + "2, ";
  }
  if (divisores.length === 0) {
    alert("El numero ingresado no es divisible por 2, 3, 5 o 7");
  } else{
  alert("El numero ingresado es divisible por: " + divisores.slice(0,-2));
  }
}
