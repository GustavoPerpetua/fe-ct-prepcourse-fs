function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  const vocales = ["a","e","i","o","u"]
  if(letra.length != 1){
    return "Dato incorrecto"
  }

  if(vocales.includes(letra)){
    return "Es vocal"
  }else{
    return "Dato incorrecto"
  }
}

console.log(esVocal("a","e"));
console.log(esVocal("c"));
console.log(esVocal("ae"));

module.exports = esVocal;
