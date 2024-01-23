function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  if(typeof x === "number" && typeof y === "number"){
    return x % y
  }
}
console.log(obtenerResto(5,2));
console.log(obtenerResto(10,2));
console.log(obtenerResto("flan",2));
console.log(obtenerResto("flan","2"));

module.exports = obtenerResto;