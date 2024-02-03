function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1) {
    return false;
  }

  for(let i = 2; i< numero; i++){
    if(numero % i === 0){
      return false
    }
  }
  return true
}
console.log(esNumeroPrimo(2));
console.log(esNumeroPrimo(5));
console.log(esNumeroPrimo(1));
console.log(esNumeroPrimo(0));
console.log(esNumeroPrimo(12));
console.log(esNumeroPrimo(-1));
console.log(esNumeroPrimo(-4));


module.exports = esNumeroPrimo;
