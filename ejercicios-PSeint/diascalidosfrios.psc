//Un centro meteorológico registró la temperatura promedio de los últimos 7 días. Diseñar un programa 
//que permita ingresar esas 7 temperaturas una por una. Al finalizar, el sistema debe mostrar en pantalla
//cuántos días hicieron temperaturas "Cálidas" (20 grados o más) y cuántos días hicieron temperaturas "Frías" (menos de 20 grados).


Algoritmo diascalidosfrios
	Definir temp Como Real
	Definir calido, frio,contador Como Entero
	calido = 0
	frio = 0
	contador = 1
	Para contador = 1 Hasta 7 Con Paso 1
		Escribir "Ingrese la temperatura del día ", contador
		Leer temp
		si	temp >= 20 Entonces
			calido = calido + 1
		SiNo
			frio = frio +1
		FinSi
	FinPara
	Escribir "Durante la semana, el clima fue el siguiente:",calido, " días cálidos, ",frio, " días fríos."
FinAlgoritmo
