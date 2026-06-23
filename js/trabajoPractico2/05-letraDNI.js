/*  Realizar una página con un script que calcule el valor de la 
letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
 */

let numeroDNI;
const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let resto;
do {
  numeroDNI = prompt("Ingrese su numero de DNI sin puntos. Ej: 42797012");
  if (numeroDNI !== null) {
    while (
      numeroDNI < 0 ||
      numeroDNI > 99999999 ||
      isNaN(numeroDNI) ||
      numeroDNI === ""
    ) {
      alert("Ingresa un DNI válido");
      numeroDNI = prompt("Ingrese su numero de DNI sin puntos. Ej: 42797012");
    }
    if (numeroDNI !== null) {
      resto = parseInt(numeroDNI) % 23;
      alert(
        `Su numero de DNI con su letra correspondiente es: ${letras.charAt(resto)} ${numeroDNI}`,
      );
    }
  }
} while (numeroDNI !== null);
