//Conversor de temperatura: Crear un programa que reciba una temperatura 
//dada en grados Celsius (°C) y la transforme a grados Fahrenheit (°F) usando la fórmula: F = C X 1.8 + 32.
Algoritmo conversorafarenheit
	Definir gradosC, gradosF Como Real
	Escribir "Ingrese su temperatura en °C para convertir a °F"
	Leer gradosC
	gradosF = gradosC * 1.8 + 32
	Escribir gradosC,"°C"," equivalen a ", gradosF "°F"
FinAlgoritmo
