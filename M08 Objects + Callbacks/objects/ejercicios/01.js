const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  if (propiedad in objeto) {
    return objeto[propiedad];
  }
  return undefined
};

module.exports = obtenerValorPropiedad;
