function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let dias = 0;
  do {
    switch (mes) {
      case 1:  // Enero
      case 3:  // Marzo
      case 5:  // Mayo
      case 7:  // Julio
      case 8:  // Agosto
      case 10: // Octubre
      case 12: // Diciembre
        dias = 31;
        break;
      case 4:  // Abril
      case 6:  // Junio
      case 9:  // Septiembre
      case 11: // Noviembre
        dias = 30;
        break;
      case 2:  // Febrero
        dias = 28; 
        break;
      default:
        console.log("Mes inválido. Ingresa un número de mes válido (1-12).");
        return dias; 
    }
  } while (dias === 0);
  
  return dias;
}
console.log(diasEnMes(2));
console.log(diasEnMes(3));
console.log(diasEnMes(4));
console.log(diasEnMes(9));

module.exports = diasEnMes;
