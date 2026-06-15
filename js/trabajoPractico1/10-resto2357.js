/* 10.- Escribe un programa que pida un número y 
nos diga si es divisible por 2, 3, 5 o 7 
(sólo hay que comprobar si lo es por uno de los cuatro)*/
const num = parseInt(
  prompt("Ingrese un numero para saber si es divisible por 2, 3, 5 o 7"),
);
if (isNaN(num)) {
  alert("Por favor, ingrese solo números válidos");
} else {
  /* if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) */
  if (num % 7 === 0) {
    alert("El numero es divisible por 7");
  } else if (num % 5 === 0) {
    alert("El numero es divisible por 5");
  } else if (num % 3 === 0) {
    alert("El numero es divisible por 3");
  } else if (num % 2 === 0) {
    alert("El numero es divisible por 2");
  } else{
    alert('El numero ingresado no es divisible por 2, 3, 5 o 7')
  }
}
