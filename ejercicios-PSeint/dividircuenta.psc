//Un grupo de amigos va a cenar. El algoritmo debe pedir el costo total de la cena y la cantidad de personas.
//Luego, debe mostrar cuánto dinero debe pagar cada uno en partes iguales.
Algoritmo dividircuenta
	Definir costototal, costoindividual Como Real
	Definir personas Como Entero
	Escribir "Ingrese el costo total de la cuenta:"
	Leer costototal
	Escribir "Ingrese cuantas personas dividiran la cuenta:"
	Leer personas
	costoindividual = costototal / personas
	Escribir "El costo que deberá pagar cada uno es de: $",costoindividual
FinAlgoritmo
