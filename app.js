var express = require("express");
var app = express();
/* 
app.get("/", function (req, res) {
  res.send("<h1>Hello World! wwwweeeef   ffgfgf fvf vff</h1>");
});
app.get("/contatti", function (req, res) {
  res.send("<h1>contatti</h1>");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
 */

/* 
const celsiusFahrenheit = require('./celsius-fahrenheit');
const circleArea = require('./circle-area');

// Convertire 20 gradi Celsius in gradi Fahrenheit e stampare il risultato sulla console.
const celsius = 20;
const fahrenheit = celsiusFahrenheit.toFahrenheit(celsius);
console.log(`${celsius} gradi Celsius corrispondono a ${fahrenheit} gradi Fahrenheit.`);

// Convertire 68 gradi Fahrenheit in gradi Celsius e stampare il risultato sulla console.
const fahrenheit2 = 68;
const celsius2 = celsiusFahrenheit.toCelsius(fahrenheit2);
console.log(`${fahrenheit2} gradi Fahrenheit corrispondono a ${celsius2} gradi Celsius.`);

// Calcolare l'area di un cerchio con raggio 5 e stampare il risultato sulla console.
const radius = 5;
const area = circleArea.circleArea(radius);
console.log(`L'area di un cerchio con raggio ${radius} è ${area}.`); */



const randomNumber = require('./random-number');
const sum = require('./sum');
const difference = require('./difference');
const product = require('./product');

// Generare un numero casuale tra 1 e 10 e stampare il risultato sulla console.
const num1 = randomNumber.randomNumber(1, 10);
const num2 = randomNumber.randomNumber(1, 10);
console.log(`I due numeri casuali generati sono ${num1} e ${num2}.`);

// Calcolare la somma dei due numeri e stampare il risultato sulla console.
const sumResult = sum.sum(num1, num2);
console.log(`La somma di ${num1} e ${num2} è ${sumResult}.`);

// Calcolare la differenza tra i due numeri e stampare il risultato sulla console.
const differenceResult = difference.difference(num1, num2);
console.log(`La differenza tra ${num1} e ${num2} è ${differenceResult}.`);

// Calcolare il prodotto tra i due numeri e stamparne il risultato
const productResult = product.product(num1, num2);
console.log(`Il prodotto di ${num1} e ${num2} è ${productResult}.`);
