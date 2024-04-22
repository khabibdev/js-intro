var fahrenheit = 68; // Assigning a Fahrenheit temperature to convert
var celsius = (fahrenheit - 32) * (5 / 9); // Applying the conversion formula
console.log(
    fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius."
);

var celsius = 20; // Assigning a Celsius temperature to convert
var fahrenheit = celsius * (9 / 5) + 32; // Applying the conversion formula
console.log(
    celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit."
);

var principal = 1000; // Example principal amount in dollars
var rate = 5; // Annual interest rate in percent
var time = 3; // Time in years
var interest = (principal * rate * time) / 100; // Simple interest formula
console.log("The interest is $" + interest + ".");

var a = 4;
var b = 5;
var temp;

// Swapping
temp = a;
a = b;
b = temp;

console.log("After swapping, a is " + a + ", and b is " + b + ".");

var a = 4;
var b = 5;

// Swapping without a third variable
a = a + b; // a becomes 9
b = a - b; // b becomes 4 (9 - 5)
a = a - b; // a becomes 5 (9 - 4)

console.log("After swapping, a is " + a + ", and b is " + b + ".");

var radius = 5; // Example value for the radius of the circle
var area = 3.14 * radius * radius; // Using 3.14 for π
console.log("The area of the circle is " + area + ".");

var length = 10; // Example value for the length of the rectangle
var width = 5; // Example value for the width of the rectangle
var perimeter = 2 * (length + width); // Perimeter formula
console.log("The perimeter of the rectangle is " + perimeter + ".");

var degrees = 90; // Example value for an angle in degrees
var radians = degrees * (3.14 / 180); // Conversion formula using 3.14 for π
console.log("The angle in radians is " + radians + ".");

var radius = 5; // Example value for the radius of the circle
var perimeter = 2 * 3.14 * radius; // Using 3.14 for π
console.log("The perimeter (circumference) of the circle is " + perimeter + ".");

var milesPerHour = 60; // Example speed in miles per hour
var kilometersPerHour = milesPerHour * 1.60934; // Conversion formula
console.log("The speed in kilometers per hour is " + kilometersPerHour + " km/h.");

var liters = 10; // Example volume in liters
var gallons = liters * 0.264172; // Conversion formula
console.log("The volume in gallons is " + gallons + " gallons.");

var principal = 1000; // Example principal amount in dollars
var annualRate = 0.05; // Annual interest rate in decimal
var years = 10; // Time in years
var n = 4; // Number of times interest is compounded per year

var totalAmount = principal * (1 + annualRate / n) ** (n * years); // Compound interest formula

console.log("The total amount after " + years + " years is $" + totalAmount.toFixed(2) + ".");
