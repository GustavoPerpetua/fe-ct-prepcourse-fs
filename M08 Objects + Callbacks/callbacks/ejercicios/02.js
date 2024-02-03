function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  return callback(string)
}
function callback (str){
  return str.toUpperCase()
}
console.log(cambiarCadena("str",callback));

module.exports = cambiarCadena;
