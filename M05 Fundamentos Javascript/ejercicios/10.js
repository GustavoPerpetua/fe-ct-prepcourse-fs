function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (typeof fecha !== 'string' || fecha.length === 0) {
    return false;
  }
  const date = new Date(fecha);
  return !isNaN(date.getTime());
}
module.exports = esFechaValida;
