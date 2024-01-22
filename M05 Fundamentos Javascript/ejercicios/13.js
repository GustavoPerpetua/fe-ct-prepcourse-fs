function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  return x === y
}
console.log(sonIguales(2,2));
console.log(sonIguales("hola","hola"));
console.log(sonIguales(2,3));

module.exports = sonIguales;