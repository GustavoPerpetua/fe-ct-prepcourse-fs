function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  const arrayResultado = array.map((elemento, indice) => elemento * indice);
  return arrayResultado;
}

module.exports = multiplicarElementosPorIndice;
