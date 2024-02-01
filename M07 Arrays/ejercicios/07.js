function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arrayEnMAyusculas = []
  for(let i = 0; i < array.length; i++){
    let stringEnMayusculas = array[i].toUpperCase();
    arrayEnMayusculas.push(stringEnMayusculas);
  }
  return arrayEnMAyusculas
}

module.exports = convertirStringAMayusculas;
