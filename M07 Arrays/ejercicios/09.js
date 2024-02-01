function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let numerosMayoresADiez = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      numerosMayoresADiez.push(array[i]);
    }
  }
  let cuentaDeNumeros = numerosMayoresADiez.length;
  return { numerosMayoresADiez, cuentaDeNumeros };
}

module.exports = contarElementosMayoresA10;
