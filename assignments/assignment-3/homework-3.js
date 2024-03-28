// Convert Fahrenheit to Celsius
let fahrenheit = 68; // Example Fahrenheit temperature
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Temperature in Celsius: " + celsius);

// Convert Celsius to Fahrenheit
let celsiusTemp = 20; // Example Celsius temperature
let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
console.log("Temperature in Fahrenheit: " + fahrenheitTemp);

// Declare variables
let principal = 1000; // Example principal amount
let rate = 5; // Example interest rate (in percentage)
let time = 2; // Example time period (in years)

// Calculate simple interest
let interest = (principal * rate * time) / 100;

// Log the interest to the console
console.log("Simple Interest: " + interest);

let a = 4;
let b = 5;

console.log("Before swapping: a =", a, "b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("After swapping: a =", a, "b =", b);

// Calculate the area of a circle
let radius = 5; // Example radius
let area = Math.PI * radius ** 2; // Using Math.PI for π
console.log("Area of the circle:", area);

// Calculate the perimeter of a rectangle
let length = 6; // Example length
let width = 4; // Example width
let perimeter = 2 * (length + width);
console.log("Perimeter of the rectangle:", perimeter);

// Convert angle from degrees to radians
let degrees = 45; // Example angle in degrees
let radians = degrees * (Math.PI / 180); // Using Math.PI for π
console.log("Angle in radians:", radians);

// Calculate the perimeter (circumference) of a circle
let radius2 = 8; // Example radius
let perimeterCircle = 2 * Math.PI * radius2; // Using Math.PI for π
console.log("Perimeter (circumference) of the circle:", perimeterCircle);

// Declare a variable for speed in miles per hour
let milesPerHour = 60; // Example speed in miles per hour

// Convert speed to kilometers per hour
let kilometersPerHour = milesPerHour * 1.60934;

// Log the result
console.log("Speed in kilometers per hour:", kilometersPerHour);

// Declare a variable for volume in liters
let liters = 10; // Example volume in liters

// Convert volume to gallons
let gallons = liters * 0.264172;

// Log the result
console.log("Volume in gallons:", gallons);

// Declare variables
let p = 1000; // Example principal amount
let annualRate = 0.05; // Example annual interest rate (5% as a decimal)
let years = 3; // Example time the money is invested for in years
let n = 4; // Number of times interest is compounded per year

// Calculate compound interest
let totalAmount = principal * Math.pow(1 + annualRate / n, n * years);

// Log the total amount after interest to the console
console.log("Total amount after compound interest:", totalAmount.toFixed(2)); // toFixed(2) limits the decimal points to two for better readability
