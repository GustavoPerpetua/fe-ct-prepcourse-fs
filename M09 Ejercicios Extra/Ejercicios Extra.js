/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const arrayDeArrays = []
  for(const key in objeto){
    if(objeto.hasOwnProperty(key)){
      const paraClaveValor = [key, objeto[key]]
      arrayDeArrays.push(paraClaveValor)
    }
  }
  return arrayDeArrays
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const count = {};

  // Recorremos el string caracter por caracter.
  for (let i = 0; i < string.length; i++) {
    const letra = string[i];

    // Si la letra ya está en el objeto, incrementamos su contador.
    if (count[letra]) {
      count[letra]++;
    } else {
      // Si la letra no está en el objeto, la inicializamos con 1.
      count[letra] = 1;
    }
  }

  // Creamos un arreglo con las letras ordenadas alfabéticamente.
  const letrasOrdenadas = Object.keys(count).sort();

  // Creamos un nuevo objeto con las letras ordenadas y sus conteos.
  const resultado = {};
  for (let i = 0; i < letrasOrdenadas.length; i++) {
    const letra = letrasOrdenadas[i];
    resultado[letra] = count[letra];
  }

  // Retornamos el objeto resultante.
  return resultado;

}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayusculas = '';
  let minusculas = '';

  for (let i = 0; i < string.length; i++) {
    const letra = string[i];
    if (letra === letra.toUpperCase()) {
      mayusculas += letra;
    } else {
      minusculas += letra;
    }
  }
  return mayusculas + minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  const palabras = frase.split(' ')

  const palabrasInvertidas = palabras.map(function(palabra) {
    return palabra.split('').reverse().join('');
  });

  const frasePalabraInvertida = palabrasInvertidas.join(' ');
  return frasePalabraInvertida

}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  const numeroStr = numero.toString();

  for (let i = 0, j = numeroStr.length - 1; i < j; i++, j--) {
    if (numeroStr.charAt(i) !== numeroStr.charAt(j)) {
      // Si los caracteres no coinciden, no es capicúa.
      return "No es capicúa";
    }
  }
  return "Es capicúa";

}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  const nuevoString = string.replace(/[abc]/gi, '');
  return nuevoString
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort(function(a, b) {
    return a.length - b.length;
  });
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  const elementosComunes = []
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      if (!elementosComunes.includes(array1[i])) {
        elementosComunes.push(array1[i]);
      }
    }
  }
  return elementosComunes;
}

console.log(!!"texto");

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

function foo(a,b){
  return a+b
}
var myvar = foo("hola", "mundo")