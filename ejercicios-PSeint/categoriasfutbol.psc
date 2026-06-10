//Crear un programa que pida la edad de un jugador de fútbol y determine su categoría según 
//la siguiente regla: Si tiene menos de 12 años es "Infantil", si tiene entre 12 y 17 años es "Juvenil", 
//y si tiene 18 años o más es "Mayor".
Algoritmo categoriasfutbol
	Definir edad Como Entero
	Definir cinfantil, cjuvenil, cmayor Como Caracter
	Escribir "Ingrese la edad del jugador: "
	Leer edad
	Si edad < 12 entonces
		Escribir "El jugador pertenece a la categoria Infantil"
	SiNo
		si edad >= 18
			Escribir "El jugador pertenece a la categoria Juvenil"
		SiNo
			Escribir "El jugador pertenece a la categoria Mayor"
		FinSi
	FinSi
FinAlgoritmo
