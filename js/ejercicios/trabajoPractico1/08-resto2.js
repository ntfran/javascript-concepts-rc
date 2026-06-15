/* 8.- Escribe un programa que pida un número y 
diga si es divisible por 2*/
const num = Number(prompt("Ingrese un número"));
if (isNaN(num)) {
  alert("Por favor, ingrese solo números válidos");
} else if (num % 2 === 0) {
  alert("El " + num + " es divisible por 2");
} else {
  alert("El " + num + " no es divisible por 2");
}
