/* Crea un script que escriba los números del 1 al 500, que indique cuáles
 son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal */
for (let i = 1; i <= 500; i++) {
  let texto = i;

  if (i % 4 === 0) {
    texto += " (Múltiplo de 4)";
  }
  if (i % 9 === 0) {
    texto += " (Múltiplo de 9)";
  }

  if (i % 5 === 0) {
    document.write(texto + "<br>");
    document.write("-------------------<br>");
  } else {
    document.write(texto + "<br>");
  }
}
