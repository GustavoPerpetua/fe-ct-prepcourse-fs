function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let concatenado = palabras.join("")
  return concatenado
}
lista= ["a","b","c","d","e","f"]
console.log(dePalabrasAFrase(lista));


module.exports = dePalabrasAFrase;
