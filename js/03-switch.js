
const opcion = prompt('Ingrese una opcion: Opcion 1 Consultar Saldo, Opcion 2 Ingresar dinero, Opcion 3 Extraer dinero')

switch (opcion) {
    case '1' :
        console.log("Aqui debo mostrar el saldo");
        const saldo = 10000
        break;
    case '2' :
        console.log("Aqui debes ingresar el saldo");
        const deposito = parseFloat(prompt('Ingrese el monto que quiere depositar:'))
        saldo += deposito
        alert(`Ingresaste ${deposito} tu saldo actual es ${saldo}`)
        break;
    case '3' :
        console.log("Aqui debes extraer el saldo");
        const montoExtraer = parseFloat(prompt('Ingrese el monto que quiere extraer:'))
        if(saldo <= montoExtraer){
            saldo -= montoExtraer
            alert(`Retiraste ${montoExtraer}, tu saldo actual es ${saldo}`)
        }else{
            alert('Fondos Insuficientes')
        }
        break;
    default:
        console.log("Ingresaste una opcion invalida");
}