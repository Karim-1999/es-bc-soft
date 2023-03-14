// Modulo per la generazione di un numero casuale tra due numeri passati come parametro
module.exports = {
    randomNumber: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  };
  