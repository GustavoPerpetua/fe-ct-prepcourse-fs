function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Tu código:
  if(typeof alto === "number" && typeof ancho === "number"){
    return alto * ancho
  }
}
console.log(obtenerAreaRectangulo(3,5));
console.log(obtenerAreaRectangulo("30","50"));
console.log(obtenerAreaRectangulo("3",5));
module.exports = obtenerAreaRectangulo;
