/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen */
const frase = prompt("Ingrese una frase:").toLowerCase();
if (frase.length > 10) {
  alert("El limite de caracteres máximo es 10.");
} else {
  let vocales = "";

  if (frase.length > 0) {
    const letra = frase.charAt(0);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 1) {
    const letra = frase.charAt(1);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 2) {
    const letra = frase.charAt(2);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 3) {
    const letra = frase.charAt(3);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 4) {
    const letra = frase.charAt(4);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 5) {
    const letra = frase.charAt(5);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 6) {
    const letra = frase.charAt(6);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 7) {
    const letra = frase.charAt(7);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 8) {
    const letra = frase.charAt(8);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (frase.length > 9) {
    const letra = frase.charAt(9);
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      vocales = vocales + letra;
    }
  }
  if (vocales.length === 0) {
    document.write("No se encontraron vocales en la frase ingresada.");
  } else {
    document.write("Vocales encontradas: " + vocales);
  }
}
