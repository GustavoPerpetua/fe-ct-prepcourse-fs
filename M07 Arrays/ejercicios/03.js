function encontrarElemento(elemento, array) {
  return array.find(function (elementoDelArray) {
    return elementoDelArray === elemento;
  }) || -1;
}
module.exports = encontrarElemento;
