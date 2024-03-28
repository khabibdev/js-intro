// Convert Fahrenheit to Celsius
let fahrenheit = 77; // Example Fahrenheit temperature
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Celsius temperature:", celsius);

// Convert Celsius to Fahrenheit
let celsiusTemp = 25; // Example Celsius temperature
let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
console.log("Fahrenheit temperature:", fahrenheitTemp);
// Declare variables
let principal = 1000; // Example principal amount
let rate = 5; // Example interest rate (in percent)
let time = 2; // Example time period (in years)

// Compute simple interest
let interest = (principal * rate * time) / 100;

// Log the interest to the console
console.log("Simple Interest:", interest);

let a = 4;
let b = 5;

// Swap values without using a third variable
a = a + b;
b = a - b;
a = a - b;

// Log to confirm the swap
console.log("a after swapping:", a); // Output will be 5
console.log("b after swapping:", b); // Output will be 4

// Calculate the area of a circle
let radius = 5; // Example radius
let area = Math.PI * radius ** 2; // Using Math.PI for π
console.log("Area of the circle:", area);

// Calculate the perimeter of a rectangle
let length = 10; // Example length
let width = 6; // Example width
let perimeter = 2 * (length + width);
console.log("Perimeter of the rectangle:", perimeter);
// Convert angle from degrees to radians
let degrees = 45; // Example angle in degrees
let radians = degrees * (Math.PI / 180);
console.log("Angle in radians:", radians);

// Calculate the perimeter (circumference) of a circle
radius = 7; // Example radius
let circumference = 2 * Math.PI * radius; // Using Math.PI for π
console.log("Circumference of the circle:", circumference);

// Declare and initialize the variable milesPerHour
let milesPerHour = 60; // Example speed in miles per hour

// Convert miles per hour to kilometers per hour
let kilometersPerHour = milesPerHour * 1.60934;
// Declare and initialize the variable liters
let liters = 10; // Example volume in liters

// Convert liters to gallons
let gallons = liters * 0.264172;

// Log the result to the console
console.log("Volume in gallons:", gallons);

// Declare variables
let p = 1000; // Example principal amount
let annualRate = 0.05; // Example annual interest rate (5% expressed as a decimal)
let years = 3; // Example time in years
let n = 4; // Number of times interest is compounded per year (fixed value)

// Compute compound interest
let totalAmount = p * Math.pow(1 + annualRate / n, n * years);

// Log the total amount after interest to the console
console.log("Total amount after compound interest:", totalAmount);
