function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
  return cb(num1,num2)
}
function callback(a,b){
  return a + b
}
const resultado = aplicarCallback(5, 3, callback);
console.log(resultado);

module.exports = operacionMatematica;
