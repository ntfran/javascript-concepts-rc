//Calcular el perímetro y área de un rectángulo: Crear un algoritmo que permita al usuario ingresar el largo y el ancho de un 
//rectángulo, y calcular su perímetro y área. Las fórmulas son:
//Perímetro: P = 2*(largo+ancho)
//Área: A=largo×ancho


Algoritmo perimetrorectangulo
	Definir area, perimetro, largo, ancho Como Real
	Definir seleccion Como Logico
	Escribir "Ingresar el largo del rectangulo en centimetros"
	Leer largo
	Escribir "Ingresar el ancho del rectangulo en centimetros"
	Leer ancho
	perimetro = 2 * (largo + ancho)
	area = largo * ancho
	Escribir "El perimetro de tu rectangulo es: ",perimetro," cm"
	Escribir "El area de tu rectangulo es: ",area," cm²"
FinAlgoritmo
