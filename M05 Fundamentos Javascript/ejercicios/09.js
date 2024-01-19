function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  return valor === null || valor === undefined;
}
console.log(esNuloOIndefinido(""));
console.log(esNuloOIndefinido(null));
console.log(esNuloOIndefinido(undefined));
module.exports = esNuloOIndefinido;
