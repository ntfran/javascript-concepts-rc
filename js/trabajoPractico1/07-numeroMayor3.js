/* 7.- Escribe un programa que pida 3 números y escriba en 
la pantalla el mayor de los tres. */
alert("Ingrese 3 numeros y se devolverá el mayor");
const num1 = Number(prompt("Ingrese el primer número"));
const num2 = Number(prompt("Ingrese el segundo número"));
const num3 = Number(prompt("Ingrese el tercer número"));
let maxNum;
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Por favor, ingrese solo números válidos");
} else if (num1 === num2 && num2 === num3) {
  alert("Ingrese dos numeros distintos entre sí");
} else {
  if (num1 >= num2 && num1 >= num3) {
    maxNum = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    maxNum = num2;
  } else {
    maxNum = num3;
  }
  document.write("El " + maxNum + " es el número más grande");
}
