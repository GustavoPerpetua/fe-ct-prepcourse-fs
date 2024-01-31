function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort(function(a, b) {
    return a - b;
  });
}
const miArreglo = [5, 2, 9, 1, 7];
const arregloOrdenado = ordenarArray(miArreglo);
console.log(arregloOrdenado);
module.exports = ordenarArray;
