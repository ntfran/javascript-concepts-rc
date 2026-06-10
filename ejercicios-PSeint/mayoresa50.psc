//Crear un programa que le pida al usuario ingresar 5 números cualesquiera (uno por uno). 
//Al finalizar, el programa debe mostrar en pantalla cuántos de esos 5 números ingresados eran mayores a 50.
Algoritmo mayoresa50
	
	Definir num1, num2, num3, num4, num5, resultado Como Entero
	Escribir "Escriba 5 numeros enteros 1 por 1"
	Leer num1
	Leer num2
	Leer num3
	Leer num4
	Leer num5
	resultado = 0
	si num1 > 50 Entonces
		resultado = resultado+1
	FinSi
	si num2 > 50 Entonces
		resultado = resultado+1
	FinSi	
	si num3 > 50 Entonces
		resultado = resultado+1
	FinSi	
	si num4 > 50 Entonces
		resultado = resultado+1
	FinSi	
	si num5 > 50 Entonces
		resultado = resultado+1
	FinSi
	si resultado = 0 Entonces
		
		Escribir "De los numeros que ingresaste, ninguno es mayor a 50"
		si resultado = 1 Entonces
			Escribir "De los numeros que ingresaste",resultado," es mayor a 50"
		FinSi
	SiNo
		Escribir "De los numeros que ingresaste, ",resultado," son mayores a 50"
	FinSi
FinAlgoritmo
