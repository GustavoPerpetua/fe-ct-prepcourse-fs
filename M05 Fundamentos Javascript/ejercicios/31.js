function areaDelTriangulo(base, altura) {
  // Calcula el área de un triángulo y retorna el resultado.
  // Tu código:
  if (typeof base === "number" && typeof altura === "number") {
    const area = (base * altura) / 2
    return  area
  }
}
console.log(areaDelTriangulo(5,7));
console.log(areaDelTriangulo("5",7));
console.log(areaDelTriangulo("5","7"));
module.exports = areaDelTriangulo;
