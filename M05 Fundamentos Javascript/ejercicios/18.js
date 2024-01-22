function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  return num %2 != 0
}
console.log(esImpar(3));
console.log(esImpar(36));
console.log(esImpar(41));
module.exports = esImpar;