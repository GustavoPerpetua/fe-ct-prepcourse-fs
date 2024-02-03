// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: "Valor 1",
    propiedad2: {
      subpropiedad1: "Subvalor 1",
      subpropiedad2: "Subvalor 2",
    },
    propiedad3: "Valor 3",

    obtenerSubpropiedad1: function() {
        return this.propiedad2.subpropiedad1;
      },

};

module.exports = objetoAnidado;
