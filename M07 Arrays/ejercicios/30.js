function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  if (numeros.length === 0) return null;
  for (let i = 0; i < numeros.length - 1; i++) {
    let numeroarepetir = numeros[i] + 1;
    if (numeros[i + 1] === numeroarepetir) {
      return numeroarepetir;
    }
  } return null;
}

module.exports = encontrarElementoRepetido;