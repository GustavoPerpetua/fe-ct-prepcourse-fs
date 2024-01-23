function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  if (typeof euro === "number") {
    return euro * 1.20
}
}
console.log(deEuroAdolar(10));
console.log(deEuroAdolar(10.5));
module.exports = deEuroAdolar;
