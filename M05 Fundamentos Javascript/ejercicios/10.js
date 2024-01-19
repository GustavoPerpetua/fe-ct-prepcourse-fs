function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const date = new Date(fecha);
  return !isNaN(date.getTime());
}
console.log(esFechaValida("2024-01-19"));
console.log(esFechaValida("20"));
console.log(esFechaValida("fecha incorrecta"));
module.exports = esFechaValida;
