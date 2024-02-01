function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for(i = 0;i < array.length; i++){
    if(array[i].length > 5){
      return array[i]
    } i++
  }
  return null
}
const miArreglo = ["Hola", "Mundo", "EsteEsLargo", "Otro"];
const primerStringLargo = obtenerPrimerStringLargo(miArreglo);
console.log(primerStringLargo);

module.exports = obtenerPrimerStringLargo;
