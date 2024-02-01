function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let contador = 0
  for(let i = 0; i < arrayOfNums.length; i++){
    contador += arrayOfNums[i]
  }
  return contador

}


module.exports = agregarNumeros;
