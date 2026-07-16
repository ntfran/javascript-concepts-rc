const pantalla = document.getElementById("pantalla");
/* NOTACION LITERAL */
const cancion = {
/* PROPIEDADES */
nombreCancion: 'Waka waka - Shakira Mundial 2010',
duracion:'03:23',
artista:'Shakira',
cantidadReproducciones:2000,
album:'Sale el Sol',
anioPublicacion:2010,
/* METODOS */
}

console.log(cancion)
pantalla.innerHTML = cancion

let datosObjeto = `<h3>Datos de la cancion</h3>
<p>Nombre de la cancion ${cancion.nombreCancion}</p>
`
pantalla.innerHTML = datosObjeto

datosObjeto += `Duracion: ${cancion['duracion']}`

pantalla.innerHTML = datosObjeto
