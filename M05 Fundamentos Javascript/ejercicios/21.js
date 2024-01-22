function suma(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su suma.
  // Tu código:
  if(typeof x === "number" && typeof y === "number"){
    return x + y
  }
}
console.log(suma(5,4));
console.log(suma("pez","aguila"));
console.log(suma("pez",41));
module.exports = suma;