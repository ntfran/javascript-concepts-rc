//Calcular el precio con descuento: 
//Crear un algoritmo que permita ingresar el precio de un producto 
//y aplicar un descuento del 15% si el precio es mayor a 1000. 
//Mostrar el precio final.
Algoritmo preciocondescuento
	Definir precio, preciodescuento Como Real
	Escribir "Ingrese el precio del producto"
	Leer precio
	Si precio >= 1000 Entonces
		preciodescuento = precio * 0.85
		Escribir " El precio con descuento: $",preciodescuento
	SiNo
		Escribir "El precio final es: $", precio
	FinSi
FinAlgoritmo
