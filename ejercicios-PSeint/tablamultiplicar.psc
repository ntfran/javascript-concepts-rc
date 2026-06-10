//El usuario ingresa un numero y se muestra la tabla de multiplicar
//Hasta el 10 de ese numero

Algoritmo tablamultiplicar
	Definir numerotabla, indice, resultado Como Entero
	Escribir "Ingrese un numero para obtener la tabla"
	Leer numerotabla


	Para indice = 1 Hasta 10 Con Paso 1
		resultado = numerotabla * indice
		Escribir numerotabla,"x",indice,"=",resultado
	FinPara

FinAlgoritmo
