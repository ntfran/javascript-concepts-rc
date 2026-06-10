//Crear un simulador simple de login. 
//El algoritmo debe pedir un usuario y una contraseña. Si el usuario es "admin" y la contraseña es "1234", 
//debe mostrar "Acceso concedido". De lo contrario, debe mostrar "Usuario o contraseña incorrectos"

Algoritmo loginsimple
	Definir usuario, contraseña Como Caracter
	Escribir "Nombre de usuario:"
	Leer usuario
	Escribir "Contraseña"
	Leer contraseña
	si contraseña = "1234" y usuario = "admin" Entonces
		Escribir "Logeado con exito"
	SiNo
		Escribir "Acceso denegado"
	FinSi
	
FinAlgoritmo
