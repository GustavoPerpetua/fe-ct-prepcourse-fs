function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arrayDuplicado = []
  for(i = 0; i < array.length; i++){
    let elementoDuplicado = array[i] * 2
    arrayDuplicado.push(elementoDuplicado)
  }
  return arrayDuplicado
}
let miArreglo = [1, 2, 3, 4, 5];
let arregloDuplicado = duplicarElementos(miArreglo);
console.log(arregloDuplicado)

module.exports = duplicarElementos;
