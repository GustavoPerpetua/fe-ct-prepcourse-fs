function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  
  array.push(elemento)
  return array
}

lista = [1,2,3,4,5]
console.log(agregarItemAlFinalDelArray(lista , 6));

module.exports = agregarItemAlFinalDelArray;
