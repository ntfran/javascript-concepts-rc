const mostrarObjeto = () => {
  datosObjeto += "<h3>Recorremos todo el objeto</h3>";
  for (let clave in cancion) {
    datosObjeto += `<p>${clave}: ${cancion[clave]}</p>`;
  }
  pantalla.innerHTML = datosObjeto;
};

const pantalla = document.getElementById("pantalla");

/* NOTACION LITERAL */
const cancion = {
  /* PROPIEDADES  se componen por "clave":"valor" */
  nombreCancion: "Waka waka - Shakira Mundial 2010",
  duracion: "03:23",
  artista: "Shakira",
  cantidadReproducciones: 2000,
  album: "Sale el Sol",
  anioPublicacion: 2010,
  /* METODOS */
};

console.log(cancion);
pantalla.innerHTML = cancion;

let datosObjeto = `<h3>Datos de la cancion</h3>
<p>Nombre de la cancion ${cancion.nombreCancion}</p>
`;
pantalla.innerHTML = datosObjeto;

datosObjeto += `Duracion: ${cancion["duracion"]}`;

pantalla.innerHTML = datosObjeto;

/* Recorrer el objeto */
datosObjeto += "<h3>Recorremos todo el objeto</h3>";
for (let clave in cancion) {
  datosObjeto += `<p>${clave}: ${cancion[clave]}</p>`;
}

pantalla.innerHTML = datosObjeto;

/* Agregar propiedades al objeto existente */

cancion.publicado = true;

mostrarObjeto();
