function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  str1 = str1.replace(/ /g, "").toLowerCase();
  str2 = str2.replace(/ /g, "").toLowerCase();

  return str1.split("").sort().join("") === str2.split("").sort().join("")

}
console.log(esAnagrama("listen", "silent"));
console.log(esAnagrama("hello", "world"));
console.log(esAnagrama("Astronomer", "Mooner star"));
module.exports = esAnagrama;
