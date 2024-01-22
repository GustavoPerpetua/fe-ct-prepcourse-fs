function multiplica(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su multiplicación.
  // Tu código:
  if(typeof x === "number" && typeof y === "number"){
    return x * y
  }
}
console.log(multiplica(23,24));
console.log(multiplica(23,"sandia"));
console.log(multiplica("sandia","24"));

module.exports = multiplica;