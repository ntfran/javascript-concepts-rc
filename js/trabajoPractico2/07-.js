/* Haz un script que escriba una pirámide 
inversa de los números del 1 al número que indique el usuario (no mayor de 50) */
const input = prompt('Ingrese un numero del 1 al 50')
if(input != null){
    while(input > 50 || isNaN(input)|| input === ''){
        alert('Ingrese un numero válido')
        input = prompt('Ingrese un numero del 1 al 50')
    }
}if(input != null){
    for( let fila = input; fila >= 1; fila -- ){
        for(let columna = 1 ; columna <= fila; columna++){
            document.write(fila)
        }
        document.write('<br>')
    }
}