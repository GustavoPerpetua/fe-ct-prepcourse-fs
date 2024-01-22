function resta(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de la resta.
  // Tu código:
  if(typeof x === "number" && typeof y === "number"){
    return x - y
  }
}
console.log(resta(2,5));
console.log(resta(2,"pez"));
console.log(resta("sandia","5"));
module.exports = resta;