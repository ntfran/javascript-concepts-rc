/* Conversor de temperatura: Crear un programa que reciba
 una temperatura dada en grados Celsius (°C) y 
la transforme a grados Fahrenheit (°F) usando la fórmula: F = C X 1.8 + 32. */
const tempCelsius = parseFloat(
  prompt(
    "Ingresar temperatura en Celsius (°C) para convertir a Fahrenheit (°F)",
  ),
);

const tempFarenheit = (tempCelsius * 1.8) + 32

alert(tempCelsius + '°C equivalen a ' + tempFarenheit + '°F')
