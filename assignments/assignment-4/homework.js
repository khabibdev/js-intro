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

// Calculate the area of a circle
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log("Area of the circle:", area);

// Calculate the perimeter of a rectangle
let length = 6;
let width = 4;
let perimeter = 2 * (length + width);
console.log("Perimeter of the rectangle:", perimeter);

// Convert degrees to radians
let degrees = 90;
let radians = degrees * (Math.PI / 180);
console.log("Radians:", radians);

// Calculate the perimeter (circumference) of a circle
let circleRadius = 7;
let circlePerimeter = 2 * Math.PI * circleRadius;
console.log("Perimeter of the circle:", circlePerimeter);
