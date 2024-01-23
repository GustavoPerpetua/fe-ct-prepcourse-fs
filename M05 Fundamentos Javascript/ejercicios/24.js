function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:
  if(typeof x === "number" && typeof y === "number"){
    return x / y
  }
}
console.log(divide(34,10));
console.log(divide(340,10));
console.log(divide(345,10));
console.log(divide("34",10));
console.log(divide("34","10"));
module.exports = divide;