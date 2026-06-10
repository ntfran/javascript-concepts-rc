//Diseñar un programa que muestre en pantalla los números del 1 al 15 en orden. Pero con una condición: 
//cada vez que el número sea un múltiplo de 3, en lugar de mostrar el número, debe escribir la palabra "¡ZUMBIDO!"
Algoritmo contadorzumbido
	Definir contador Como Entero
	Para contador = 1 hasta 15 Con Paso 1
		si contador % 3 = 0 Entonces
			Escribir "!ZUMBIDO!"
		SiNo
			Escribir contador
		FinSi
	FinPara
FinAlgoritmo
