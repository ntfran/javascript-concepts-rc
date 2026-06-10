//Convertir grados Fahrenheit a Celsius: Crear un algoritmo que permita al usuario ingresar una temperatura en grados Fahrenheit y 
//convertirla a grados Celsius. La fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)?*(F?32)
Algoritmo convertirtemperatura
	Definir gradosF, gradosC Como Real
	Escribir "Ingrese la temperatura en grados Fahrenheit"
	Leer gradosF
	gradosC = (5 / 9) * (gradosF - 32)
	Escribir "La temperatura en grados Celcius es: ", gradosC,"ºC"
FinAlgoritmo
