function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    return 0;
  }

  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  return producto;
}

module.exports = productoEntreNúmeros;