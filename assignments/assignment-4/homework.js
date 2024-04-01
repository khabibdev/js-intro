// Convert Fahrenheit to Celsius
let fahrenheit = 75;
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Temperature in Celsius:", celsius);

// Convert Celsius to Fahrenheit
let celsiusTemp = 24;
let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
console.log("Temperature in Fahrenheit:", fahrenheitTemp);

// Declare variables
let principal = 1000; // in dollars
let rate = 5; // in percent
let time = 2; // in years

// Compute simple interest
let interest = (principal * rate * time) / 100;

// Log the interest to the console
console.log("Simple Interest:", interest);

let a = 5;
let b = 10;

// Swap values without using a third variable
a = a + b;
b = a - b;
a = a - b;

// Log the swapped values
console.log("a:", a);
console.log("b:", b);
