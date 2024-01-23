function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  return str + "!"
}
console.log(agregarSimboloExclamacion("hola"));
console.log(agregarSimboloExclamacion("otra cosa "));
console.log(agregarSimboloExclamacion(5));

module.exports = agregarSimboloExclamacion;
