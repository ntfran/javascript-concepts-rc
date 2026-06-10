//Solicitar al usuario un número entero positivo. El programa debe imprimir en pantalla la canción de los elefantes 
//desde el 1 hasta el número ingresado (Ej: "1 elefante se balanceaba...", "2 elefantes se balanceaban...").

Algoritmo contarelefantes
	Definir elefantes, contador Como Entero
	Escribir "Ingrese el numero de elefantes de la cancion"
	Leer elefantes
	
	Para contador = 1 Hasta elefantes Con Paso 1
		si contador = 1 Entonces
			Escribir contador," elefante se balanceaba..."
		SiNo
			Escribir contador," elefantes de balanceaban..."
		FinSi
	FinPara
FinAlgoritmo
