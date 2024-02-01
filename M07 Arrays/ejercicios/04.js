function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio]; 
}
array = [1,2,3,4,5,6,7]
console.log(obtenerElementoAleatorio(array));
module.exports = obtenerElementoAleatorio;
