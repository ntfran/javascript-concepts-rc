const mostrarCanciones = () => {
  let lista = `<h2 class='my-3'>Array de canciones: elementos ${canciones.length}</h2>`;
  lista += '<ul class="list-group">';
  for (let i = 0; i < canciones.length; i++) {
    lista += `<li class="list-group-item">${canciones[i]}</li>`;
  }
  lista += "</ul>";
  console.log(lista);
  pantalla.innerHTML += lista;
};

/* Array vacio */
const colores = [];
/* Array con datos */
const canciones = [
  true,
  "Unstate Italia (Italia 90')",
  "La copa de la vida (Francia 98')",
  "Waka waka (Sudafria 2010),",
  1998,
];

console.log(typeof canciones);
console.log(colores);
console.log(canciones);

const pantalla = document.getElementById("pantalla");

pantalla.textContent = "prueba de texto";
pantalla.innerHTML += "<h1>Practica de arrays</h1>";

pantalla.innerHTML += `<p>Cantidad de elementos del array canciones: ${canciones.length}</p>`;
pantalla.innerHTML += `<p>Cantidad de elementos del array colores: ${colores.length}</p>`;

pantalla.innerHTML += `<p>${canciones}</p>`;

/* Mostrar array en una lista */
mostrarCanciones();

canciones.unshift("la la la - shakira (Brasil 2014), We are one (Brasil 2014)");

mostrarCanciones();

canciones.push("Live it up (Rusia 2018)");

mostrarCanciones();

canciones.splice(3, 0, "Dai dai (2026)");

mostrarCanciones();

canciones.shift()
canciones.shift()

mostrarCanciones();

canciones.pop();

mostrarCanciones();

canciones.splice(4,1)
/* canciones.splice(4) //ESTE CASO BORRA TODOS LOS ELEMENTOS DESDE LA POSICION 4 */

mostrarCanciones();