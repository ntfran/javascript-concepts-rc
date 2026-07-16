const canciones = [];
do {
  const titulo = prompt("Ingresa el nombre de la cancion");
  const artista = prompt("Ingresa el nombre del artista");
  const anio = prompt("Ingresa el año de la cancion");

  const cancion = {
    titulo: titulo,
    artista,
    anio,
  };
  canciones.push(cancion);
  console.log(cancion);
  console.log(canciones);
} while (confirm("Queres ingresar otra cancion?"));

console.log(canciones);
/* Mostrar el array por pantalla */
const pantalla = document.getElementById("pantalla");
let texto = "";

pantalla.innerHTML += "<h2>Lista de canciones</h2>";

texto = canciones.map((cancion) =>`<p>Cancion: ${cancion.titulo} - Artista: ${cancion.artista} - Año de publicacion: ${cancion.anio}</p>`,);

pantalla.innerHTML += texto.join('');
