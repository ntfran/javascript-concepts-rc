/* 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */
const num1 = Number(
  prompt("Ingrese el primer número para saber cual es mayor"),
);
const num2 = Number(
  prompt("Ingrese el segundo número para saber cual es mayor"),
);
if (num1 === num2) {
  alert("Ingrese dos numeros distintos entre sí");
}
if (num1 > num2) {
  document.write("El " + num1 + ' es el numero más grande');
}
else {
    document.write("El " + num2 + ' es el numero más grande');
}