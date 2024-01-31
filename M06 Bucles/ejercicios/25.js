function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  string = string.replace(/ /g, "").toLowerCase();

  return string === string.split("").reverse().join("");
}
console.log(esPalindromo("Oso"));
console.log(esPalindromo("Amo la paloma"));
console.log(esPalindromo("meNEm"));
console.log(esPalindromo("neuquen"));
module.exports = esPalindromo;
