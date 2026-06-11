const usuario = prompt("Ingrese su usuario");
const contraseña = prompt("Ingrese su contraseña");

if (usuario === "admin" || contraseña === "1234") {
  alert("Acceso concedido al sistema. Bienvenido!");
} else {
  alert("Acceso denegado. El usuario o la contraseña son incorrectos");
}
