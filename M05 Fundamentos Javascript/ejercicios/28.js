function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  return "Hola "+ nombre + "!"
}
console.log(obtenerSaludo("Gustavo"));
console.log(obtenerSaludo("Gonzalo"));
console.log(obtenerSaludo(3));
module.exports = obtenerSaludo;