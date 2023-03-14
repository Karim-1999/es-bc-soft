// Modulo per la conversione dei gradi Celsius in gradi Fahrenheit e viceversa
module.exports = {
    toFahrenheit: function(celsius) {
      return (celsius * 9/5) + 32;
    },
    toCelsius: function(fahrenheit) {
      return (fahrenheit - 32) * 5/9;
    }
  };
  