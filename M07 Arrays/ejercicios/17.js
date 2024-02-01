function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  tabla6 = []

  for(let i = 0; i <= 10; i++){
      tabla6.push(i * 6)
  }

  return tabla6
}

const resultado = tablaDelSeis();
console.log(resultado);
module.exports = tablaDelSeis;
