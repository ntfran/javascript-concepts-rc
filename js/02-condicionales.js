const edad = parseInt(prompt("Ingrese la edad:"));
console.log(edad);

isNaN(edad)
console.log(edad)
if(isNaN(edad) === false){
    //Se puede usar if(!isNaN(edad)) Describe lo mismo que la linea de arriba
if (edad >= 18) {
  console.log("Sos mayor de edad");
  alert("Sos mayor de edad");
} else {
  alert("Sos menor de edad");
}
} else {
    alert('Ingresaste un valor no numerico')
}

