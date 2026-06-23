/* 1- Escribir un programa que solicite la edad 
y si es mayor de 18 años mostrar un mensaje que ya 
puede conducir, si la edad ingresada no es un número 
válido indicarlo en un mensaje.
 */

let edad = parseInt(prompt("Ingrese su edad para saber si ya puede conducir"));
while (isNaN(edad) || edad < 0 || edad > 110) {
  alert("Por favor ingrese una edad válida");
  edad = parseInt(prompt("Ingrese su edad para saber si ya puede conducir"));
}
if (edad >= 18) {
  alert("Ya cuentas con la edad suficiente para conducir");
} else {
  alert("Aun eres menor de edad, no puedes conducir");
}
